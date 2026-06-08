import { createRequestHandler } from "react-router";
// @ts-expect-error Generated at build time; no static .d.ts is emitted for this module.
import * as build from "../build/server/index.js";

const handleRequest = createRequestHandler(build);

type WorkerExecutionContext = {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
};

type AssetFetcher = {
  fetch(request: Request): Promise<Response>;
};

type Env = {
  ASSETS: AssetFetcher;
};

async function fetchWithRetries(url: string, attempts: number) {
  let lastError: unknown;

  for (let attempt = 0; attempt < attempts; attempt += 1) {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);

    try {
      const response = await fetch(url, {
        signal: controller.signal,
        redirect: "follow",
      });

      if (response.ok) {
        return response;
      }

      lastError = new Error(`Upstream request failed with status ${response.status}`);
    } catch (error) {
      lastError = error;
    } finally {
      clearTimeout(timeout);
    }

    if (attempt < attempts - 1) {
      await new Promise((resolve) => setTimeout(resolve, 300 * (attempt + 1)));
    }
  }

  throw lastError instanceof Error ? lastError : new Error("Upstream request failed");
}

function resolveGallerySource(url: URL) {
  const source = url.searchParams.get("src");

  if (source) {
    return source;
  }

  const imageId = decodeURIComponent(url.pathname.replace("/gallery-image/", ""));
  return `https://drive.google.com/thumbnail?id=${encodeURIComponent(imageId)}&sz=w1600`;
}

export default {
  async fetch(request: Request, env: Env, ctx: WorkerExecutionContext) {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/gallery-image/")) {
      const sourceUrl = resolveGallerySource(url);

      if (!sourceUrl) {
        return new Response("Missing image id", { status: 400 });
      }

      const upstreamResponse = await fetchWithRetries(sourceUrl, 5);

      const headers = new Headers(upstreamResponse.headers);
      headers.set("Cache-Control", "public, max-age=86400, s-maxage=604800");

      return new Response(upstreamResponse.body, {
        status: upstreamResponse.status,
        headers,
      });
    }

    const isAsset =
      url.pathname.startsWith("/assets/") ||
      url.pathname === "/favicon.ico" ||
      url.pathname === "/robots.txt" ||
      url.pathname === "/manifest.webmanifest" ||
      url.pathname.includes(".");

    if (isAsset) {
      return env.ASSETS.fetch(request);
    }

    return handleRequest(request, { cloudflare: { env, ctx } });
  },
};

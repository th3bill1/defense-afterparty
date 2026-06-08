import { useEffect, useState } from "react";

import { siteContent } from "../lib/site-content";
import "./common.css";
import "./gallery.css";

type DriveFile = {
  id: string;
  name: string;
  thumbnailLink?: string | null;
  webViewLink?: string | null;
  webContentLink?: string | null;
};

type DriveListResponse = {
  files?: DriveFile[];
  nextPageToken?: string;
};

const googleDriveApiKey = "AIzaSyC8fcIq4rpXbBEZIwozDH--21oWPMUCh0M";
const googleDriveFolderId = "12IbtyNab0Dsy-wGsxUTfVKPp_lpi1nJA";

function buildImageSrc(file: DriveFile) {
  return (
    file.thumbnailLink ??
    file.webContentLink ??
    `https://drive.google.com/uc?export=view&id=${file.id}`
  );
}

function buildFileUrl(file: DriveFile) {
  return file.webViewLink ?? `https://drive.google.com/file/d/${file.id}/view`;
}

async function loadDriveImages(signal: AbortSignal) {
  const images: DriveFile[] = [];
  let pageToken: string | undefined;

  do {
    const params = new URLSearchParams({
      key: googleDriveApiKey,
      q: `'${googleDriveFolderId}' in parents and mimeType contains 'image/' and trashed = false`,
      pageSize: "100",
      fields: "nextPageToken,files(id,name,thumbnailLink,webViewLink,webContentLink)",
      spaces: "drive",
      includeItemsFromAllDrives: "true",
      supportsAllDrives: "true",
    });

    if (pageToken) {
      params.set("pageToken", pageToken);
    }

    const response = await fetch(`https://www.googleapis.com/drive/v3/files?${params.toString()}`, {
      signal,
    });

    if (!response.ok) {
      throw new Error(`Google Drive API request failed with status ${response.status}`);
    }

    const payload = (await response.json()) as DriveListResponse;
    images.push(...(payload.files ?? []));
    pageToken = payload.nextPageToken;
  } while (pageToken);

  return images;
}

export function meta() {
  return [
    { title: `Galeria | ${siteContent.title}` },
    {
      name: "description",
      content: "Galeria zdjęć pobierana z Google Drive.",
    },
  ];
}

export default function GaleriaRoute() {
  const [images, setImages] = useState<DriveFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    async function run() {
      if (!googleDriveApiKey || !googleDriveFolderId) {
        setError("Uzupełnij VITE_GOOGLE_DRIVE_API_KEY oraz VITE_GOOGLE_DRIVE_FOLDER_ID.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const driveImages = await loadDriveImages(controller.signal);
        setImages(driveImages);
      } catch (fetchError) {
        if (controller.signal.aborted) {
          return;
        }

        setError(fetchError instanceof Error ? fetchError.message : "Nie udało się pobrać zdjęć.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    void run();

    return () => controller.abort();
  }, []);

  return (
    <main className="gallery-page">
      <section className="gallery-hero panel">
        <div>
          <p className="gallery-kicker">Galeria</p>
          <h1>Zdjęcia z Google Drive</h1>
          <p className="gallery-lead">
            Dodaj zdjęcia do dysku!
          </p>
        </div>

        <div className="gallery-meta">
          <div>
            <span className="gallery-meta-label">Folder</span>
            <strong>{googleDriveFolderId ? "Podłączony" : "Brak konfiguracji"}</strong>
          </div>
          <div>
            <span className="gallery-meta-label">Zdjęcia</span>
            <strong>{images.length}</strong>
          </div>
        </div>
      </section>

      {loading ? (
        <section className="gallery-state panel">
          <p className="gallery-state-title">Wczytywanie zdjęć...</p>
          <p>Jeśli to pierwszy start, galeria pobiera listę plików z Google Drive.</p>
        </section>
      ) : error ? (
        <section className="gallery-state panel">
          <p className="gallery-state-title">Nie można wyświetlić galerii</p>
          <p>{error}</p>
        </section>
      ) : images.length === 0 ? (
        <section className="gallery-state panel">
          <p className="gallery-state-title">Brak zdjęć</p>
          <p>Folder nie zwrócił jeszcze żadnych plików graficznych.</p>
        </section>
      ) : (
        <section className="gallery-grid" aria-label="Galeria zdjęć">
          {images.map((file) => (
            <article className="gallery-card" key={file.id}>
              <a className="gallery-image-link" href={buildFileUrl(file)} target="_blank" rel="noreferrer">
                <img alt={file.name} className="gallery-image" loading="lazy" src={buildImageSrc(file)} />
              </a>
              <div className="gallery-card-body">
                <h2>{file.name}</h2>
                <a className="gallery-open-link" href={buildFileUrl(file)} target="_blank" rel="noreferrer">
                  Otwórz w Google Drive
                </a>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
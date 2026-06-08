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

function getImageSources(file: DriveFile, size = 1200) {
  return [
    `https://lh3.googleusercontent.com/d/${file.id}=s${size}`,
    `https://drive.google.com/thumbnail?id=${file.id}&sz=w${size}`,
    file.thumbnailLink,
    `https://drive.google.com/uc?export=view&id=${file.id}`,
    file.webContentLink,
  ].filter(Boolean) as string[];
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
  const content = siteContent.landing.gallery;

  return [
    { title: `${content.title}` },
    { name: "description", content: content.description },
  ];
}

function DriveImage({
  file,
  className,
  size = 1200,
  loading = "lazy",
}: {
  file: DriveFile;
  className: string;
  size?: number;
  loading?: "lazy" | "eager";
}) {
  const sources = getImageSources(file, size);
  const [sourceIndex, setSourceIndex] = useState(0);

  return (
    <img
      alt=""
      className={className}
      decoding="async"
      loading={loading}
      referrerPolicy="no-referrer"
      src={sources[sourceIndex]}
      onError={() => {
        setSourceIndex((current) => {
          const next = current + 1;
          return next < sources.length ? next : current;
        });
      }}
    />
  );
}

function shuffleArray<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

export default function GaleriaRoute() {
  const content = siteContent.landing.gallery;
  const [images, setImages] = useState<DriveFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openImage = (index: number) => {
    setActiveIndex(index);
  };

  const closeImage = () => {
    setActiveIndex(null);
  };

  const showPrevious = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === 0 ? images.length - 1 : current - 1;
    });
  };

  const showNext = () => {
    setActiveIndex((current) => {
      if (current === null) return null;
      return current === images.length - 1 ? 0 : current + 1;
    });
  };

  useEffect(() => {
    const controller = new AbortController();

    async function run() {
      if (!googleDriveApiKey || !googleDriveFolderId) {
        setError("Uzupełnij konfigurację Google Drive.");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const driveImages = await loadDriveImages(controller.signal);
        setImages(shuffleArray(driveImages));
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

  useEffect(() => {
    if (activeIndex === null) return;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        closeImage();
      }

      if (event.key === "ArrowLeft") {
        showPrevious();
      }

      if (event.key === "ArrowRight") {
        showNext();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, images.length]);

  return (
    <main className="gallery-page">
      <section className="gallery-header lp-section">
        <h1>{content.title}</h1>
        <p className="lp-lead">
          {content.lead} Wystarczy dodać zdjęcia do folderu na{" "}
          <a className="gallery-link" href={content.folderUrl} target="_blank" rel="noopener noreferrer">
            Google Drive
          </a>
          . Zdjęcia pojawią się automatycznie w galerii na tej stronie.
        </p>
      </section>

      {loading ? (
        <section className="gallery-state lp-section">
          <p className="gallery-state-title">{content.loading}</p>
        </section>
      ) : error ? (
        <section className="gallery-state lp-section">
          <p className="gallery-state-title">{content.errorTitle}</p>
          <p>{error}</p>
        </section>
      ) : images.length === 0 ? (
        <section className="gallery-state lp-section">
          <p className="gallery-state-title">{content.emptyTitle}</p>
          <p>{content.emptyText}</p>
        </section>
      ) : (
        <>
          <section className="gallery-grid" aria-label="Galeria zdjęć">
            {images.map((file, index) => (
              <button
                className="gallery-image-button"
                key={file.id}
                onClick={() => openImage(index)}
                type="button"
                aria-label={content.openLabel}
              >
                <DriveImage file={file} className="gallery-image" size={1200} />
              </button>
            ))}
          </section>

          {activeIndex !== null && (
            <div className="gallery-lightbox" onClick={closeImage} role="dialog" aria-modal="true">
              <button
                className="gallery-lightbox-close"
                onClick={closeImage}
                type="button"
                aria-label={content.controls.close}
              >
                ×
              </button>

              <button
                className="gallery-lightbox-arrow gallery-lightbox-arrow-left"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                type="button"
                aria-label={content.controls.previous}
              >
                {"<"}
              </button>

              <div className="gallery-lightbox-image-wrap" onClick={(event) => event.stopPropagation()}>
                <DriveImage
                  key={images[activeIndex].id}
                  file={images[activeIndex]}
                  className="gallery-lightbox-image"
                  size={4000}
                  loading="eager"
                />
              </div>

              <button
                className="gallery-lightbox-arrow gallery-lightbox-arrow-right"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                type="button"
                aria-label={content.controls.next}
              >
                {">"}
              </button>
            </div>
          )}
        </>
      )}
    </main>
  );
}
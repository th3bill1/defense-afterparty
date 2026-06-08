import { Link } from "react-router";

export function meta() {
	return [{ title: "404" }, { name: "description", content: "Page not found." }];
}

export default function CatchallPage() {
	return (
  <main className="page not-found-page">
    <div className="container not-found-card">
      <p className="not-found-label">Page not found</p>

      <h1>404</h1>

      <p className="not-found-text">
        Nie znaleziono strony.
      </p>

      <Link className="primary-button not-found-button" to="/">
        Wróć na stronę główną
      </Link>
    </div>
  </main>
);
}

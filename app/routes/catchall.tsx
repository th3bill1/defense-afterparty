import { Link } from "react-router";

import { siteContent } from "../lib/site-content";

export function meta() {
	return [{ title: siteContent.notFound.title }, { name: "description", content: siteContent.notFound.description }];
}

export default function CatchallPage() {
	return (
  <main className="page not-found-page">
    <div className="container not-found-card">
      <p className="not-found-label">{siteContent.notFound.label}</p>

      <h1>{siteContent.notFound.heading}</h1>

      <p className="not-found-text">{siteContent.notFound.text}</p>

      <Link className="primary-button not-found-button" to="/">
        {siteContent.notFound.button}
      </Link>
    </div>
  </main>
);
}

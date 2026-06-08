import { siteContent } from "../lib/site-content";

import "./common.css";

export function meta() {
  return [
    { title: siteContent.menu.title },
    { name: "description", content: siteContent.menu.description },
  ];
}

export default function MenuPage() {
  return (
    <section className="lp-section">
      <h1>{siteContent.menu.title}</h1>
      <p className="lp-lead">{siteContent.menu.intro}</p>
    </section>
  );
}
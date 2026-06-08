import { siteContent } from "../lib/site-content";
import "./common.css";

export function meta() {
  const content = siteContent.faq;

  return [
    { title: content.title },
    { name: "description", content: content.lead },
  ];
}

export default function FaqPage() {
  const content = siteContent.faq;

  return (
    <section className="lp-section">
      <h1>{content.title}</h1>
      <p className="lp-lead">{content.lead}</p>

      <div className="faq-list section-title">
        {content.items.map((item) => (
          <article className="panel" key={item.question}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

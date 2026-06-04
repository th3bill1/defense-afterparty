import { siteContent } from "../lib/site-content";

export function meta() {
  return [
    { title: "FAQ template" },
    { name: "description", content: "FAQ page template for event websites." },
  ];
}

export default function FaqPage() {;

  return (
    <section>
      <h1>{siteContent.faq.title}</h1>
      <p>{siteContent.faq.lead}</p>

      <div className="faq-list section-title">
        {siteContent.faq.items.map((item) => (
          <article className="panel" key={item.question}>
            <h2>{item.question}</h2>
            <p>{item.answer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

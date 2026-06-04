import { siteContent } from "../lib/site-content";
import { useLayoutContext } from "./layout";

export function meta() {
  return [
    { title: "FAQ template" },
    { name: "description", content: "FAQ page template for event websites." },
  ];
}

export default function FaqPage() {
  const { lang } = useLayoutContext();

  return (
    <section>
      <h1>{siteContent.faq.title[lang]}</h1>
      <p>{siteContent.faq.lead[lang]}</p>

      <div className="faq-list section-title">
        {siteContent.faq.items.map((item) => (
          <article className="panel" key={item.question.pl}>
            <h2>{item.question[lang]}</h2>
            <p>{item.answer[lang]}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

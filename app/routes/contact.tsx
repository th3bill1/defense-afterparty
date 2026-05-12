import { siteContent } from "../lib/site-content";
import { useLayoutContext } from "./layout";

export function meta() {
  return [
    { title: "Contact template" },
    { name: "description", content: "Contact page template for event websites." },
  ];
}

export default function ContactPage() {
  const { lang } = useLayoutContext();
  const labels = siteContent.contact.formLabels;

  return (
    <section>
      <h1>{siteContent.contact.title[lang]}</h1>
      <p>{siteContent.contact.intro[lang]}</p>

      <article className="panel section-title">
        <strong>{siteContent.contact.direct[lang]}</strong>
      </article>

      <form className="contact-form section-title" onSubmit={(event) => event.preventDefault()}>
        <label>
          {labels.name[lang]}
          <input placeholder={labels.name[lang]} type="text" />
        </label>

        <label>
          {labels.email[lang]}
          <input placeholder={labels.email[lang]} type="email" />
        </label>

        <label>
          {labels.message[lang]}
          <textarea placeholder={labels.message[lang]} rows={5} />
        </label>

        <button className="primary-button" type="submit">
          {labels.send[lang]}
        </button>
      </form>
    </section>
  );
}

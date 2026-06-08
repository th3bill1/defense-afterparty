import { siteContent } from "../lib/site-content";

export function meta() {
  return [
    { title: "Contact template" },
    { name: "description", content: "Contact page template for event websites." },
  ];
}

export default function ContactPage() {
  const labels = siteContent.contact.formLabels;

  return (
    <section>
      <h1>{siteContent.contact.title}</h1>
      <p>{siteContent.contact.intro}</p>

      <article className="panel section-title">
        <strong>{siteContent.contact.contactLabel}</strong>
        <br />
        <strong>{siteContent.contact.direct}</strong>
      </article>

      <form className="contact-form section-title" onSubmit={(event) => event.preventDefault()}>
        <label>
          {labels.name}
          <input placeholder={labels.name} type="text" />
        </label>

        <label>
          {labels.email}
          <input placeholder={labels.email} type="email" />
        </label>

        <label>
          {labels.message}
          <textarea placeholder={labels.message} rows={5} />
        </label>

        <button className="primary-button" type="submit">
          {labels.send}
        </button>
      </form>
    </section>
  );
}

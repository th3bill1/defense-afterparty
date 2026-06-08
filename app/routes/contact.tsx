import { useState } from "react";

import { siteContent } from "../lib/site-content";
import "./form.css";
import "./common.css";

export function meta() {
  return [
    { title: siteContent.contact.title },
    { name: "description", content: siteContent.contact.intro },
  ];
}

export default function ContactPage() {
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  return (
    <section className="lp-section">
      <h1>{siteContent.contact.title}</h1>
      <p className="lp-lead">{siteContent.contact.intro}</p>

      <article className="panel section-title">
        <strong>{siteContent.contact.contactLabel}</strong>
        <br />
        <strong>{siteContent.contact.direct}</strong>
      </article>

      <div className="lp-form-google-wrap">
        <div className={`lp-form-shell lp-contact-form-shell ${isFormLoaded ? "is-loaded" : ""}`}>
          <div className="lp-form-loading" aria-busy="true" aria-live="polite">
            <div className="lp-form-loading-card">
              <div className="lp-form-loading-heading">
                <span className="lp-form-spinner" aria-hidden="true" />
                <span>Ładowanie formularza kontaktowego</span>
              </div>
            </div>
          </div>

          <div className="lp-form-invert">
            <div className="lp-form-color-fix">
              <iframe
                className="lp-form-iframe lp-contact-iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLScdaa1mlhge4sbrK0xkLaxkPQMX0KrTna9j3th8QxJOqBnnGQ/viewform?embedded=true"
                title="Contact"
                loading="lazy"
                onLoad={() => setIsFormLoaded(true)}
              >
                Loading…
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

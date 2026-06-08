import { useState } from "react";

import { siteContent } from "../lib/site-content";
import "./common.css";
import "./form.css";


export function meta() {
  return [
    { title: siteContent.landing.rsvp.title },
    { name: "description", content: siteContent.landing.rsvp.deadline },
  ];
}

export default function RsvpPage() {
  const rsvp = siteContent.landing.rsvp;
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  return (
    <section className="lp-section lp-form-section">
      <h1>{rsvp.title}</h1>
      <p className="lp-lead">{rsvp.deadline}</p>

      <div className="lp-form-google-wrap">
        <div className={`lp-form-shell lp-rsvp-form-shell ${isFormLoaded ? "is-loaded" : ""}`}>
          <div className="lp-form-loading" aria-busy="true" aria-live="polite">
            <div className="lp-form-loading-card">
              <div className="lp-form-loading-heading">
                <span className="lp-form-spinner" aria-hidden="true" />
                <span>Ładowanie formularza zgłoszeniowego</span>
              </div>
            </div>
          </div>

          <div className="lp-form-invert">
            <div className="lp-form-color-fix">
              <iframe
                className="lp-form-iframe lp-rsvp-iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLSdnmaeaZ9UaivjDBgrbwQHxkitj3nx5fFim1NUjdMvB6BXnxQ/viewform?embedded=true"
                title="RSVP"
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

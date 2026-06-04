import { useEffect, useMemo, useState } from "react";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { siteContent } from "../lib/site-content";
import { useLayoutContext } from "./layout";
import "./landing.css";

export function meta() {
  return [
    { title: siteContent.landing.meta.title.pl },
    { name: "description", content: siteContent.landing.meta.description.pl },
  ];
}

export default function LandingPage() {
  const { lang } = useLayoutContext();
  const [activePhoto, setActivePhoto] = useState<number | null>(null);

  const content = siteContent.landing;

  const galleryCount = content.gallery.items.length;
  const shownPhoto = useMemo(() => {
    if (activePhoto === null) {
      return null;
    }

    return content.gallery.items[activePhoto];
  }, [activePhoto, content.gallery.items]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (activePhoto === null) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActivePhoto(null);
      }

      if (event.key === "ArrowLeft") {
        setActivePhoto((current) => {
          if (current === null) {
            return 0;
          }

          return (current - 1 + galleryCount) % galleryCount;
        });
      }

      if (event.key === "ArrowRight") {
        setActivePhoto((current) => {
          if (current === null) {
            return 0;
          }

          return (current + 1) % galleryCount;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activePhoto, galleryCount]);

  return (
    <>
      <section className="lp-section lp-hero" data-reveal>
        <div className="lp-hero-content">
          <Badge>{content.hero.eyebrow[lang]}</Badge>
          <h1>{content.hero.headline[lang]}</h1>
          <div className="lp-hero-meta">{content.hero.dateBadge[lang]}</div>

          <div className="lp-hero-actions">
            <a className="lp-cta lp-cta-primary" href="#rsvp">
              {content.hero.buttons.confirm[lang]}
            </a>
            <a className="lp-cta" href="#miejsce">
              {content.hero.buttons.venue[lang]}
            </a>
            <a className="lp-cta" href="#dojazd">
              {content.hero.buttons.directions[lang]}
            </a>
            <a className="lp-cta" href="#timeline">
              {content.hero.buttons.timeline[lang]}
            </a>
          </div>
        </div>

        <div className="lp-hero-photo" role="img" aria-label={content.hero.photoPlaceholder[lang]}>
          <span>{content.hero.photoPlaceholder[lang]}</span>
        </div>
      </section>

      <section className="lp-section" data-reveal>
        <h2>{content.keyInfo.title[lang]}</h2>
        <div className="lp-info-grid">
          {content.keyInfo.items.map((item) => (
            <article className="lp-card" key={item.label.pl}>
              <p className="lp-label">{item.label[lang]}</p>
              <p className="lp-value">{item.value[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section" id="miejsce" data-reveal>
        <h2>{content.venue.title[lang]}</h2>
        <p className="lp-lead">{content.venue.lead[lang]}</p>

        <img alt="Dworek Białołęka - widok z zewnątrz" className="lp-venue-image" src={content.venue.imageSrc} />

        <div className="lp-badges">
          {content.venue.features[lang].map((feature) => (
            <Badge key={feature} variant="outline">
              {feature}
            </Badge>
          ))}
        </div>
      </section>

      <section className="lp-section" id="dojazd" data-reveal>
        <h2>{content.travel.title[lang]}</h2>
        <p className="lp-lead">{content.travel.lead[lang]}</p>

        <div className="lp-map-wrap">
          <iframe
            className="lp-map"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src={content.travel.mapEmbedUrl}
            title="Mapa dojazdu - Dworek Białołęka"
          />
        </div>

        <Button
          className="lp-maps-button"
          onClick={() => window.open(content.travel.mapsUrl, "_blank", "noopener,noreferrer")}
          type="button"
          variant="outline"
        >
          {content.travel.mapsButton[lang]}
        </Button>

        <div className="lp-tip-grid">
          {content.travel.tips.map((tip) => (
            <article className="lp-card" key={tip.title.pl}>
              <h3>{tip.title[lang]}</h3>
              <p>{tip.text[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section" id="rsvp" data-reveal>
        <h2>{content.rsvp.title[lang]}</h2>
        <p className="lp-lead">{content.rsvp.lead[lang]}</p>
        <article className="lp-deadline">{content.rsvp.deadline[lang]}</article>

        <form className="lp-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            {content.rsvp.fields.fullName[lang]}
            <input placeholder={content.rsvp.placeholders.name[lang]} type="text" />
          </label>

          <label>
            {content.rsvp.fields.attendance[lang]}
            <select defaultValue="yes">
              <option value="yes">{content.rsvp.options.attendanceYes[lang]}</option>
              <option value="no">{content.rsvp.options.attendanceNo[lang]}</option>
            </select>
          </label>

          <label>
            {content.rsvp.fields.guestCount[lang]}
            <input min={1} placeholder={content.rsvp.placeholders.guestCount[lang]} type="number" />
          </label>

          <label>
            {content.rsvp.fields.stay[lang]}
            <select defaultValue="yes">
              <option value="yes">{content.rsvp.options.stayYes[lang]}</option>
              <option value="no">{content.rsvp.options.stayNo[lang]}</option>
            </select>
          </label>

          <label>
            {content.rsvp.fields.diet[lang]}
            <input placeholder={content.rsvp.placeholders.diet[lang]} type="text" />
          </label>

          <label className="lp-form-full">
            {content.rsvp.fields.message[lang]}
            <textarea placeholder={content.rsvp.placeholders.message[lang]} rows={5} />
          </label>

          <Button className="lp-submit" type="submit">
            {content.rsvp.fields.submit[lang]}
          </Button>
        </form>
      </section>

      <section className="lp-section" data-reveal>
        <h2>{content.hotel.title[lang]}</h2>
        <p className="lp-lead">{content.hotel.lead[lang]}</p>
        <div className="lp-info-grid">
          {content.hotel.details.map((item) => (
            <article className="lp-card" key={item.label.pl}>
              <p className="lp-label">{item.label[lang]}</p>
              <p className="lp-value">{item.value[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section" id="timeline" data-reveal>
        <h2>{content.timeline.title[lang]}</h2>
        <div className="lp-timeline">
          {content.timeline.items.map((item) => (
            <article className="lp-timeline-item" key={`${item.time}-${item.title.pl}`}>
              <span className="lp-time">{item.time}</span>
              <span className="lp-dot" aria-hidden="true" />
              <strong>{item.title[lang]}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section" data-reveal>
        <h2>{content.gallery.title[lang]}</h2>
        <p className="lp-lead">{content.gallery.lead[lang]}</p>
        <div className="lp-gallery-grid">
          {content.gallery.items.map((item, index) => (
            <button
              aria-label={item.title[lang]}
              className="lp-gallery-thumb"
              key={item.title.pl}
              onClick={() => setActivePhoto(index)}
              type="button"
            >
              <strong>{item.title[lang]}</strong>
              <span>{item.caption[lang]}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="lp-section" data-reveal>
        <h2>{content.faq.title[lang]}</h2>
        <div className="lp-faq-grid">
          {content.faq.items.map((item) => (
            <article className="lp-card" key={item.question.pl}>
              <h3>{item.question[lang]}</h3>
              <p>{item.answer[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section" data-reveal>
        <h2>{content.contact.title[lang]}</h2>
        <p className="lp-lead">{content.contact.lead[lang]}</p>
        <article className="lp-card lp-contact-card">
          <p>
            <strong>{content.contact.phoneLabel[lang]}:</strong> {content.contact.phone[lang]}
          </p>
          <p>
            <strong>{content.contact.emailLabel[lang]}:</strong> {content.contact.email[lang]}
          </p>
          <a className="lp-cta lp-cta-primary" href={`mailto:${content.contact.email.pl.replace("[", "").replace("]", "")}`}>
              {content.contact.cta[lang]}
            </a>
        </article>
      </section>

      {shownPhoto ? (
        <div className="lp-lightbox" onClick={() => setActivePhoto(null)} role="presentation">
          <div className="lp-lightbox-content" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true">
            <header>
              <h3>{shownPhoto.title[lang]}</h3>
              <button onClick={() => setActivePhoto(null)} type="button">
                {content.gallery.controls.close[lang]}
              </button>
            </header>
            <div className="lp-lightbox-photo" role="img" aria-label={shownPhoto.caption[lang]}>
              {shownPhoto.caption[lang]}
            </div>
            <footer>
              <Button
                onClick={() =>
                  setActivePhoto((current) => {
                    if (current === null) {
                      return 0;
                    }

                    return (current - 1 + galleryCount) % galleryCount;
                  })
                }
                type="button"
                variant="outline"
              >
                {content.gallery.controls.previous[lang]}
              </Button>
              <Button
                onClick={() =>
                  setActivePhoto((current) => {
                    if (current === null) {
                      return 0;
                    }

                    return (current + 1) % galleryCount;
                  })
                }
                type="button"
                variant="outline"
              >
                {content.gallery.controls.next[lang]}
              </Button>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
}

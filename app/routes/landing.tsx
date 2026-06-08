import { useEffect, useMemo, useState } from "react";

import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { siteContent } from "../lib/site-content";
import "./landing.css";
import "./common.css";

export function meta() {
  return [
    { title: siteContent.landing.meta.title },
    { name: "description", content: siteContent.landing.meta.description },
  ];
}

export default function LandingPage() {

  const content = siteContent.landing;

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

  return (
    <>
      <section className="lp-section lp-hero" data-reveal>
        <div className="lp-hero-content">
          <Badge>{content.hero.eyebrow}</Badge>
          <h1>{content.hero.headline}</h1>
          <div className="lp-hero-meta">{content.hero.dateBadge}</div>

          <div className="lp-hero-actions">
            <a className="lp-cta lp-cta-primary" href="/rsvp">
              {content.hero.buttons.confirm}
            </a>
            <a className="lp-cta" href="#miejsce">
              {content.hero.buttons.venue}
            </a>
            <a className="lp-cta" href="#dojazd">
              {content.hero.buttons.directions}
            </a>
            <a className="lp-cta" href="#timeline">
              {content.hero.buttons.timeline}
            </a>
          </div>
        </div>

        <div className="lp-hero-photo" role="img" aria-label={content.hero.photoUrl}>
          <img src={content.hero.photoUrl} alt={content.hero.photoUrl} />
        </div>
      </section>

      <section className="lp-section" data-reveal>
        <h2>{content.keyInfo.title}</h2>
        <div className="lp-info-grid">
          {content.keyInfo.items.map((item) => (
            <article className="lp-card" key={item.label}>
              <p className="lp-label">{item.label}</p>
              <p className="lp-value">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section" id="miejsce" data-reveal>
        <h2>{content.venue.title}</h2>
        <p className="lp-lead">{content.venue.lead}</p>

        <img alt="Dworek Białołęka - widok z zewnątrz" className="lp-venue-image" src={content.venue.imageSrc} />
      </section>

      <section className="lp-section" id="dojazd" data-reveal>
        <h2>{content.travel.title}</h2>
        <p className="lp-lead">{content.travel.lead}</p>

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
          className="lp-maps-button hover:cursor-pointer"
          onClick={() => window.open(content.travel.mapsUrl, "_blank", "noopener,noreferrer")}
          type="button"
          variant="outline"
        >
          {content.travel.mapsButton}
        </Button>

        <div className="lp-tip-grid">
          {content.travel.tips.map((tip) => (
            <article className="lp-card" key={tip.title}>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </article>
          ))}
        </div>
      </section>

      

      <section className="lp-section" data-reveal>
        <h2>{content.hotel.title}</h2>
        <p className="lp-lead">{content.hotel.lead}</p>
        <div className="lp-info-grid">
          {content.hotel.details.map((item) => (
            <article className="lp-card" key={item.label}>
              <p className="lp-label">{item.label}</p>
              <p className="lp-value">{item.value}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section" id="timeline" data-reveal>
        <h2>{content.timeline.title}</h2>
        <div className="lp-timeline">
          {content.timeline.items.map((item) => (
            <article className="lp-timeline-item" key={`${item.time}-${item.title}`}>
              <span className="lp-time">{item.time}</span>
              <span className="lp-dot" aria-hidden="true" />
              <strong>{item.title}</strong>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section" data-reveal>
        <h2>{content.faq.title}</h2>
        <div className="lp-faq-grid">
          {content.faq.items.map((item) => (
            <article className="lp-card" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="lp-section" data-reveal>
        <h2>{content.contact.title}</h2>
        <p className="lp-lead">{content.contact.lead}</p>
        <article className="lp-card lp-contact-card">
          <p>
            <strong>{content.contact.nameLabel}</strong>
            <br />
            <strong>{content.contact.phoneLabel}:</strong> {content.contact.phone}
          </p>
        </article>
      </section>

      
    </>
  );
}

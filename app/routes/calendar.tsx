import { siteContent } from "../lib/site-content";

export function meta() {
  return [
    { title: "Calendar template" },
    { name: "description", content: "Calendar page template for event websites." },
  ];
}

export default function CalendarPage() {

  return (
    <section>
      <h1>{siteContent.calendar.title}</h1>
      <p>{siteContent.calendar.intro}</p>

      <div className="calendar-list section-title">
        {siteContent.calendar.items.map((item) => (
          <article className="panel calendar-row" key={item.date + item.title}>
            <div className="calendar-date">{item.date}</div>
            <div>
              <h2>{item.title}</h2>
              <p>{item.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

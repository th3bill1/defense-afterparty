import { siteContent } from "../lib/site-content";
import { useLayoutContext } from "./layout";

export function meta() {
  return [
    { title: "Calendar template" },
    { name: "description", content: "Calendar page template for event websites." },
  ];
}

export default function CalendarPage() {
  const { lang } = useLayoutContext();

  return (
    <section>
      <h1>{siteContent.calendar.title[lang]}</h1>
      <p>{siteContent.calendar.intro[lang]}</p>

      <div className="calendar-list section-title">
        {siteContent.calendar.items.map((item) => (
          <article className="panel calendar-row" key={item.date + item.title.en}>
            <div className="calendar-date">{item.date}</div>
            <div>
              <h2>{item.title[lang]}</h2>
              <p>{item.note[lang]}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

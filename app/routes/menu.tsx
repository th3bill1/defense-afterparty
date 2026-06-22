import { siteContent } from "../lib/site-content";

import "./common.css";

export function meta() {
  return [
    { title: siteContent.menu.title },
    { name: "description", content: siteContent.menu.description },
  ];
}

function MenuItem({
  children,
  vegetarian = false,
}: {
  children: React.ReactNode;
  vegetarian?: boolean;
}) {
  return (
    <li className="menu-item">
      <span className="menu-item-text">{children}</span>
      {vegetarian && <span className="menu-tag">Wege</span>}
    </li>
  );
}

export default function MenuPage() {
  const content = siteContent.menu;

  const sectionVegetarianItems = new Set([
    "Wrapy wege",
    "Carpaccio z buraka",
  ]);

  return (
    <section className="lp-section menu-page">
      <header className="menu-header">
        <h1>{content.title}</h1>
        <p className="lp-lead">{content.intro}</p>
      </header>

      <div className="menu-paper">
        <section className="menu-block menu-block-featured" aria-labelledby="hot-dishes-title">
          <h2 id="hot-dishes-title">{content.hotDishesTitle}</h2>

          <div className="menu-courses-grid">
            {content.hotDishes.map((dish) => {
              const vegetarianAlreadyListed = dish.items.includes(dish.vegetarian);

              return (
                <article className="menu-course" key={dish.title}>
                  <h3>{dish.title}</h3>

                  <ul className="menu-list">
                    {dish.items.map((item) => (
                      <MenuItem
                        key={item}
                        vegetarian={item === dish.vegetarian}
                      >
                        {item}
                      </MenuItem>
                    ))}

                    {!vegetarianAlreadyListed && (
                      <MenuItem vegetarian>{dish.vegetarian}</MenuItem>
                    )}
                  </ul>
                </article>
              );
            })}
          </div>
        </section>

        <div className="menu-columns">
          {content.sections.map((section) => (
            <section className="menu-block" key={section.title}>
              <h2>{section.title}</h2>

              <ul className="menu-list">
                {section.items.map((item) => (
                  <MenuItem
                    key={item}
                    vegetarian={sectionVegetarianItems.has(item)}
                  >
                    {item}
                  </MenuItem>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
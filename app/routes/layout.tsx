import { useEffect, useMemo } from "react";
import { Link, NavLink, Outlet, useOutletContext } from "react-router";

import { type Lang, siteContent } from "../lib/site-content";

type LayoutContext = {
  lang: Lang;
};

export function useLayoutContext() {
  return useOutletContext<LayoutContext>();
}

function getInitialLang(): Lang {
  return "pl";
}


export default function LayoutRoute() {
  const lang = getInitialLang();

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const pageTitle = useMemo(() => siteContent.title[lang], [lang]);

  return (
    <div className="shell">
      <header className="site-header">
        <div className="container header-inner">
          <Link className="site-name" to="/">
            {pageTitle}
          </Link>

          <ul className="nav-list" aria-label="Main navigation">
            {siteContent.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  className="nav-link"
                  to={item.to}
                >
                  {item.label[lang]}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="toolbar">
          </div>
        </div>
      </header>

      <main className="page">
        <div className="container">
          <Outlet context={{ lang }} />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container">{siteContent.footer[lang]}</div>
      </footer>
    </div>
  );
}

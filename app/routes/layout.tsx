import { useEffect, useMemo, useState } from "react";
import { Link, NavLink, Outlet, useOutletContext } from "react-router";

import { type Lang, siteContent } from "../lib/site-content";

type ThemeMode = "light" | "dark";

type LayoutContext = {
  lang: Lang;
};

export function useLayoutContext() {
  return useOutletContext<LayoutContext>();
}

function getInitialLang(): Lang {
  if (typeof window === "undefined") {
    return "pl";
  }

  const savedLang = window.localStorage.getItem("lang");
  return savedLang === "en" ? "en" : "pl";
}

function getInitialTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("theme");
  return savedTheme === "dark" ? "dark" : "light";
}

export default function LayoutRoute() {
  const [lang, setLang] = useState<Lang>(getInitialLang);
  const [theme, setTheme] = useState<ThemeMode>(getInitialTheme);

  useEffect(() => {
    document.documentElement.lang = lang;
    window.localStorage.setItem("lang", lang);
  }, [lang]);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    window.localStorage.setItem("theme", theme);
  }, [theme]);

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
            <button
              className="toolbar-button"
              onClick={() => setLang((current) => (current === "pl" ? "en" : "pl"))}
              type="button"
            >
              {lang === "pl" ? siteContent.controls.language.en : siteContent.controls.language.pl}
            </button>

            <button
              className="toolbar-button"
              onClick={() => setTheme((current) => (current === "dark" ? "light" : "dark"))}
              type="button"
            >
              {theme === "dark" ? siteContent.controls.themeLight[lang] : siteContent.controls.themeDark[lang]}
            </button>
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

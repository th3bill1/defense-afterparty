import { useEffect, useRef, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";

import { siteContent } from "../lib/site-content";

export default function LayoutRoute() {
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollYRef = useRef(0);
  const tickingRef = useRef(false);

  useEffect(() => {
    lastScrollYRef.current = window.scrollY;

    const updateHeaderVisibility = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollYRef.current;

      if (currentScrollY < 24) {
        setIsHeaderHidden(false);
      } else if (scrollDelta > 6) {
        setIsHeaderHidden(true);
      } else if (scrollDelta < -6) {
        setIsHeaderHidden(false);
      }

      lastScrollYRef.current = currentScrollY;
      tickingRef.current = false;
    };

    const handleScroll = () => {
      if (!tickingRef.current) {
        tickingRef.current = true;
        window.requestAnimationFrame(updateHeaderVisibility);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="shell">
      <header className={`site-header${isHeaderHidden ? " site-header--hidden" : ""}`}>
        <div className="container header-inner">
          <Link className="site-name" to="/">
            {siteContent.title}
          </Link>

          <ul className="nav-list" aria-label="Main navigation">
            {siteContent.nav.map((item) => (
              <li key={item.to}>
                <NavLink
                  className="nav-link"
                  to={item.to}
                >
                  {item.label}
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
          <Outlet />
        </div>
      </main>

      <footer className="site-footer">
        <div className="container footer-content">
          <div>{siteContent.footer}</div>
          <div className="author">Autor strony: {siteContent.author}</div>
        </div>
      </footer>
    </div>
  );
}

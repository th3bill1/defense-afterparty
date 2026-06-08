import { Link, NavLink, Outlet } from "react-router";

import { siteContent } from "../lib/site-content";

export default function LayoutRoute() {

  return (
    <div className="shell">
      <header className="site-header">
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

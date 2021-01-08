import { useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import classNames from "classnames";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/about",
    label: "Zur Person",
  },
  {
    href: "/faq",
    label: "FAQ",
  },
  {
    href: "/publications",
    label: "Texte",
  },
];
function AppHeader() {
  const { asPath, prefetch, pathname } = useRouter();
  const collapseEl = useRef();
  const collapseInstance = useRef();

  useEffect(() => {
    // Bootstrap needs to be loaded dynamically to avoid SSR `document is not defined` issue
    import("bootstrap/js/dist/collapse").then(({ default: Collapse }) => {
      // https://getbootstrap.com/docs/5.0/components/collapse/#via-javascript
      collapseInstance.current = new Collapse(collapseEl.current, {
        toggle: false,
      });
    });
  }, []);

  useEffect(() => {
    if (collapseInstance.current) {
      collapseInstance.current.hide();
    }
  }, [pathname]);

  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container-fluid">
          <Link href="/">
            <a className="navbar-brand">Psychotherapie Dohm</a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarLinks"
            aria-controls="navbarLinks"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarLinks"
            ref={collapseEl}
          >
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {links.map((link) => (
                <li className="nav-item" key={link.label}>
                  <Link href={link.href}>
                    <a
                      className={classNames("nav-link", {
                        active: asPath === link.href,
                      })}
                      aria-current="page"
                      onMouseEnter={() => prefetch(link.href)}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default AppHeader;

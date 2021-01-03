import React from "react";
import styles from "../styles/AppHeader.module.css";
import Link from "next/link";
import NavLink from "./NavLink";

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
  return (
    <header className={`${styles.header} box-shadow`}>
      <div className="container">
        <Link href="/">
          <a>
            <h1 className={styles.title}>Psychotherapie Dohm</h1>
          </a>
        </Link>

        <nav className={styles.links}>
          {links.map((link) => (
            <NavLink
              key={link.label}
              href={link.href}
              activeClassName={styles.active}
            >
              <a>{link.label}</a>
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default AppHeader;

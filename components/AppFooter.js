import React from "react";
import styles from "../styles/AppFooter.module.css";
import Link from "next/link";

function AppFooter({ content, title }) {
  return (
    <footer className={`${styles.footer} container`}>
      <h3>{title}</h3>
      <div dangerouslySetInnerHTML={{ __html: content }} />
      <nav>
        <Link href="/privacy">
          <a>Datenschutz</a>
        </Link>
        <Link href="/legal">
          <a>Impressum</a>
        </Link>
      </nav>
    </footer>
  );
}

export default AppFooter;

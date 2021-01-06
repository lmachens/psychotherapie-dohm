import React from "react";
import Link from "next/link";

function AppFooter({ content, title }) {
  return (
    <footer className="bg-dark text-light">
      <div className="container py-5">
        <h3>{title}</h3>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <nav className="navbar justify-content-center">
          <Link href="/privacy">
            <a className="nav-link">Datenschutz</a>
          </Link>
          <Link href="/legal">
            <a className="nav-link">Impressum</a>
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export default AppFooter;

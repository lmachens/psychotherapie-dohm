import React from "react";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import { getFooter, getPrivacy } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Privacy({ title, content, footer }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm" />
      <main className="main box-shadow">
        <section className="container">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </main>
      <AppFooter {...footer} />
    </>
  );
}

export default Privacy;

export async function getStaticProps() {
  const privacy = (await getPrivacy()) || {};
  const footer = (await getFooter()) || {};

  return {
    props: {
      title: privacy.title,
      content: await markdownToHtml(privacy?.content || ""),
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer?.content || ""),
      },
    },
  };
}

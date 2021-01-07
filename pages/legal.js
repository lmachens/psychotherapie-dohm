import React from "react";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import { getFooter, getLegal } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Legal({ title, content, footer }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - Impressum" />
      <main>
        <section className="p-5">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </main>
      <AppFooter {...footer} />
    </>
  );
}

export default Legal;

export async function getServerSideProps() {
  const [legal, footer] = await Promise.all([getLegal(), getFooter()]);

  return {
    props: {
      title: legal.title,
      content: await markdownToHtml(legal?.content || ""),
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer?.content || ""),
      },
    },
  };
}

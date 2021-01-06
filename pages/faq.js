import React from "react";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import { getFaq, getFooter } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Faq({ title, coverUrl, content, footer }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm" />
      <main className="main box-shadow">
        <section className="container">
          <h2>{title}</h2>
          <img src={coverUrl} alt="" />
        </section>
        <div className="divider" />
        <section
          className="container"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
      <AppFooter {...footer} />
    </>
  );
}

export default Faq;

export async function getStaticProps() {
  const faq = (await getFaq()) || {};
  const footer = (await getFooter()) || {};

  return {
    props: {
      title: faq.title,
      coverUrl: `${process.env.STRAPI_API_URL}${faq.cover.url}`,
      content: await markdownToHtml(faq?.content || ""),
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer?.content || ""),
      },
    },
  };
}

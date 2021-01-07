import React from "react";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { getFaq, getFooter } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Faq({ title, coverUrl, content, footer, teaser }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - FAQ" />
      <main>
        <section className="row g-0 align-items-center bg-dark text-light">
          <div className="col">
            <Teaser title={title}>
              <div dangerouslySetInnerHTML={{ __html: teaser }} />
            </Teaser>
          </div>
          <div className="col">
            <RatioImg src={coverUrl} alt="Praxis" />
          </div>
        </section>
        <section
          className="p-5"
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
      teaser: await markdownToHtml(faq.teaser || ""),
      coverUrl: `${process.env.STRAPI_API_URL}${faq.cover.url}`,
      content: await markdownToHtml(faq.content || ""),
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer.content || ""),
      },
    },
  };
}

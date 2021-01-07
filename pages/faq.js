import React from "react";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { getFaq, getFooter } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Faq({ title, baseUrl, cover, content, footer, teaser }) {
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
            <RatioImg
              smallSrc={`${baseUrl}${cover.formats.small.url}`}
              mediumSrc={`${baseUrl}${cover.formats.medium.url}`}
              largeSrc={`${baseUrl}${cover.url}`}
              alt={cover.alternativeText}
            />
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

export async function getServerSideProps() {
  const [faq, footer] = await Promise.all([getFaq(), getFooter()]);

  return {
    props: {
      baseUrl: process.env.STRAPI_API_URL,
      title: faq.title,
      cover: faq.cover,
      teaser: await markdownToHtml(faq.teaser || ""),
      content: await markdownToHtml(faq.content || ""),
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer.content || ""),
      },
    },
  };
}

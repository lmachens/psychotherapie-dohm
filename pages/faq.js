import React from "react";
import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { getFaq } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Faq({ title, baseUrl, cover, content, teaser }) {
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
    </>
  );
}

export default Faq;

export async function getServerSideProps() {
  const faq = await getFaq();

  return {
    props: {
      baseUrl: process.env.STRAPI_API_URL,
      title: faq.title,
      cover: faq.cover,
      teaser: await markdownToHtml(faq.teaser),
      content: await markdownToHtml(faq.content),
    },
  };
}

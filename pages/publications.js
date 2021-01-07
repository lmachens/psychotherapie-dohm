import React from "react";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { getFooter, getPublications } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Publications({ title, partnerUrls, coverUrl, content, footer }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - Publikationen" />
      <main>
        <section className="row g-0 align-items-center bg-dark text-light">
          <div className="col">
            <Teaser title={title}>
              <div>
                {partnerUrls.map((partnerUrl) => (
                  <img
                    key={partnerUrl}
                    src={partnerUrl}
                    alt=""
                    className="partner-image"
                  />
                ))}
              </div>
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

export default Publications;

export async function getStaticProps() {
  const publications = (await getPublications()) || {};
  const footer = (await getFooter()) || {};

  return {
    props: {
      title: publications.title,
      partnerUrls: publications.partners.map(
        (partner) => `${process.env.STRAPI_API_URL}${partner.url}`
      ),
      coverUrl: `${process.env.STRAPI_API_URL}${publications.cover.url}`,
      content: await markdownToHtml(publications?.content || ""),
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer?.content || ""),
      },
    },
  };
}

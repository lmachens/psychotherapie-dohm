import React from "react";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { getPublications } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Publications({ title, partners, baseUrl, cover, content }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - Publikationen" />
      <main>
        <section className="row g-0 align-items-center bg-dark text-light">
          <div className="col">
            <Teaser title={title}>
              <div>
                {partners.map((partner) => (
                  <img
                    key={partner.id}
                    src={`${baseUrl}${partner.url}`}
                    alt={partner.alternativeText}
                    className="partner-image"
                  />
                ))}
              </div>
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

export default Publications;

export async function getServerSideProps() {
  const publications = await getPublications();

  return {
    props: {
      baseUrl: process.env.STRAPI_API_URL,
      title: publications.title,
      cover: publications.cover,
      partners: publications.partners,
      content: await markdownToHtml(publications?.content || ""),
    },
  };
}

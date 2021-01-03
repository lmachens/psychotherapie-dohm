import Head from "next/head";
import React from "react";
import AppFooter from "../components/AppFooter";
import { getFooter, getPublications } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Publications({ title, partnerUrls, coverUrl, content, footer }) {
  return (
    <>
      <Head>
        <title>Psychotherapie Dohm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main box-shadow">
        <section className="container">
          <h2>{title}</h2>
          {partnerUrls.map((partnerUrl) => (
            <img key={partnerUrl} src={partnerUrl} alt="" />
          ))}
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

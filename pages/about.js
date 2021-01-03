import Head from "next/head";
import React from "react";
import AppFooter from "../components/AppFooter";
import { getAbout, getFooter } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function About({ title, teaser, coverUrl, content, footer }) {
  return (
    <>
      <Head>
        <title>Psychotherapie Dohm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main box-shadow">
        <section className="container">
          <h2>{title}</h2>
          <div
            className="teaser"
            dangerouslySetInnerHTML={{ __html: teaser }}
          />
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

export default About;

export async function getStaticProps() {
  const about = (await getAbout()) || {};
  const footer = (await getFooter()) || {};

  return {
    props: {
      title: about.title,
      coverUrl: `${process.env.STRAPI_API_URL}${about.cover.url}`,
      teaser: await markdownToHtml(about?.teaser || ""),
      content: await markdownToHtml(about?.content || ""),
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer?.content || ""),
      },
    },
  };
}

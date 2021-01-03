import Head from "next/head";
import React from "react";
import AppFooter from "../components/AppFooter";
import { getFooter, getLegal } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Legal({ title, content, footer }) {
  return (
    <>
      <Head>
        <title>Psychotherapie Dohm</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

export default Legal;

export async function getStaticProps() {
  const legal = (await getLegal()) || {};
  const footer = (await getFooter()) || {};

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

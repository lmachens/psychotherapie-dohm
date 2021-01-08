import React from "react";
import AppHead from "../components/AppHead";
import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Legal({ title, content }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - Impressum" />
      <main>
        <section className="p-5">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </main>
    </>
  );
}

export default Legal;

export async function getServerSideProps() {
  const legal = await fetchAPI("dohm-legal");

  return {
    props: {
      title: legal.title,
      content: await markdownToHtml(legal?.content || ""),
    },
  };
}

import React from "react";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { getAbout, getFooter } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function About({ title, teaser, coverUrl, avatarUrl, content, footer }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - Zur Person" />
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
        <img
          className="img-thumbnail float-end m-5"
          src={avatarUrl}
          alt="Lea Dohm"
        />
        <section
          className="p-5"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
      <AppFooter {...footer} />
    </>
  );
}

export default About;

export async function getStaticProps() {
  const [about, footer] = await Promise.all([getAbout(), getFooter()]);

  return {
    props: {
      title: about.title,
      coverUrl: `${process.env.STRAPI_API_URL}${about.cover.url}`,
      teaser: await markdownToHtml(about.teaser || ""),
      content: await markdownToHtml(about.content || ""),
      avatarUrl: `${process.env.STRAPI_API_URL}${about.avatar.url}`,
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer?.content || ""),
      },
    },
  };
}

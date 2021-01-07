import React from "react";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { getAbout, getFooter } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function About({ title, teaser, baseUrl, cover, avatar, content, footer }) {
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
            <RatioImg
              smallSrc={`${baseUrl}${cover.formats.small.url}`}
              mediumSrc={`${baseUrl}${cover.formats.medium.url}`}
              largeSrc={`${baseUrl}${cover.url}`}
              alt={cover.alternativeText}
            />
          </div>
        </section>
        <img
          className="avatar img-thumbnail float-sm-end m-5"
          src={`${baseUrl}${avatar.url}`}
          alt={avatar.alternativeText}
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

export async function getServerSideProps() {
  const [about, footer] = await Promise.all([getAbout(), getFooter()]);

  return {
    props: {
      baseUrl: process.env.STRAPI_API_URL,
      title: about.title,
      cover: about.cover,
      teaser: await markdownToHtml(about.teaser || ""),
      content: await markdownToHtml(about.content || ""),
      avatar: about.avatar,
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer?.content || ""),
      },
    },
  };
}

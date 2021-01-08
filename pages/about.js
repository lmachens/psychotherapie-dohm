import React from "react";
import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { fetchAPI } from "../lib/api";
import { optimizeCMSImageSrc } from "../lib/image";
import markdownToHtml from "../lib/markdownToHtml";

function About({ title, teaser, cover, avatar, content }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - Zur Person" />
      <main>
        <section className="row g-0 align-items-stretch bg-dark text-light">
          <div className="col">
            <Teaser title={title}>
              <div dangerouslySetInnerHTML={{ __html: teaser }} />
            </Teaser>
          </div>
          <div className="col">
            <RatioImg
              smallSrc={cover.formats.small.url}
              mediumSrc={cover.formats.medium.url}
              largeSrc={cover.formats.large.url}
              alt={cover.alternativeText}
            />
          </div>
        </section>
        <img
          className="avatar img-thumbnail float-sm-end m-5"
          src={optimizeCMSImageSrc({ src: avatar.url, width: 200 })}
          alt={avatar.alternativeText}
          loading="lazy"
          decoding="async"
        />
        <section
          className="p-5"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </>
  );
}

export default About;

export async function getServerSideProps() {
  const about = await fetchAPI("dohm-about");

  return {
    props: {
      title: about.title,
      cover: about.cover,
      teaser: await markdownToHtml(about.teaser || ""),
      content: await markdownToHtml(about.content || ""),
      avatar: about.avatar,
    },
  };
}

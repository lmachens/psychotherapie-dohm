import { getHome } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import GDPRIframe from "../components/GDPRIframe";

export default function Home({ title, teaser, cover, content }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm" />
      <main>
        <section className="row g-0 align-items-stretch">
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
        <section
          className="p-5 bg-dark text-light"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <section className="py-5">
          <GDPRIframe
            width="500"
            height="350"
            src="https://www.youtube-nocookie.com/embed/gJlvfIVIOF0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            previewText="Bitte akzeptieren, um YouTube cookies zu laden"
            previewSrc="/youtube.jpg"
          />
        </section>
        <GDPRIframe
          className="w-100"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4877.249654844559!2d9.20608!3d52.32281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2865d69dd2947da!2sPsychotherapie%20Dohm!5e0!3m2!1sen!2sus!4v1609681486347!5m2!1sen!2sus"
          height="450"
          width="100%"
          frameBorder="0"
          allowFullScreen
          aria-hidden="false"
          tabIndex="0"
          previewText="Bitte akzeptieren, um Google Maps cookies zu laden"
          previewSrc="/map.jpg"
        />
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const home = await getHome();

  return {
    props: {
      title: home.title,
      cover: home.cover,
      teaser: await markdownToHtml(home.teaser),
      content: await markdownToHtml(home.welcome),
    },
  };
}

import { getHome, getFooter } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";
import AppFooter from "../components/AppFooter";
import AppHead from "../components/AppHead";

export default function Home({ title, teaser, coverUrl, content, footer }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm" />
      <main className="main box-shadow">
        <section className="row align-items-center">
          <div className="col text-center p-5">
            <h2>{title}</h2>
            <div
              className="teaser"
              dangerouslySetInnerHTML={{ __html: teaser }}
            />
          </div>
          <div className="col">
            <img className="img-fluid img-cover" src={coverUrl} alt="" />
          </div>
        </section>
        <section
          className="p-5 bg-dark text-light"
          dangerouslySetInnerHTML={{ __html: content }}
        />
        <section className="p-5 row align-items-center">
          <iframe
            width="500"
            height="350"
            src="https://www.youtube.com/embed/gJlvfIVIOF0"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          />
        </section>
        <iframe
          className="w-100"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d4877.249654844559!2d9.20608!3d52.32281!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa2865d69dd2947da!2sPsychotherapie%20Dohm!5e0!3m2!1sen!2sus!4v1609681486347!5m2!1sen!2sus"
          height="450"
          frameBorder="0"
          allowFullscreen=""
          aria-hidden="false"
          tabIndex="0"
        />
      </main>
      <AppFooter {...footer} />
    </>
  );
}

export async function getStaticProps() {
  const home = (await getHome()) || {};
  const footer = (await getFooter()) || {};
  return {
    props: {
      title: home.title,
      coverUrl: `${process.env.STRAPI_API_URL}${home.cover.url}`,
      teaser: await markdownToHtml(home?.teaser || ""),
      content: await markdownToHtml(home?.welcome || ""),
      footer: {
        title: footer.title,
        content: await markdownToHtml(footer?.content || ""),
      },
    },
  };
}

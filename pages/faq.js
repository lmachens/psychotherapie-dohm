import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Faq({ title, cover, content, teaser }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - FAQ" />
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
        <section
          className="p-5"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </main>
    </>
  );
}

export default Faq;

export async function getServerSideProps() {
  const faq = await fetchAPI("dohm-faq");

  return {
    props: {
      title: faq.title,
      cover: faq.cover,
      teaser: await markdownToHtml(faq.teaser),
      content: await markdownToHtml(faq.content),
    },
  };
}

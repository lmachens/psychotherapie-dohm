import AppHead from "../components/AppHead";
import RatioImg from "../components/RatioImg";
import Teaser from "../components/Teaser";
import { fetchAPI } from "../lib/api";
import { optimizeCMSImageSrc } from "../lib/image";
import markdownToHtml from "../lib/markdownToHtml";

function Publications({ title, partners, cover, content }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - Publikationen" />
      <main>
        <section className="row g-0 align-items-stretch bg-dark text-light">
          <div className="col">
            <Teaser title={title}>
              <div>
                {partners.map((partner) => (
                  <img
                    key={partner.id}
                    src={optimizeCMSImageSrc({ src: partner.url, width: 90 })}
                    width="90"
                    height="90"
                    alt={partner.alternativeText}
                    className="partner-image"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
            </Teaser>
          </div>
          <div className="col">
            <RatioImg src={cover.url} alt={cover.alternativeText} />
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

export default Publications;

export async function getServerSideProps() {
  const publications = await fetchAPI("dohm-publications");

  return {
    props: {
      title: publications.title,
      cover: publications.cover,
      partners: publications.partners,
      content: await markdownToHtml(publications?.content || ""),
    },
  };
}

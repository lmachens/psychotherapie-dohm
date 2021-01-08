import AppHead from "../components/AppHead";
import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

function Privacy({ title, content }) {
  return (
    <>
      <AppHead title="Psychotherapie Dohm - Datenschutz" />
      <main>
        <section className="p-5">
          <h2>{title}</h2>
          <div dangerouslySetInnerHTML={{ __html: content }} />
        </section>
      </main>
    </>
  );
}

export default Privacy;

export async function getServerSideProps() {
  const privacy = await fetchAPI("dohm-privacy");

  return {
    props: {
      title: privacy.title,
      content: await markdownToHtml(privacy?.content || ""),
    },
  };
}

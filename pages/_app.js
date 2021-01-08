import "../styles/styles.scss";
import App from "next/app";
import dynamic from "next/dynamic";
import AppHeader from "../components/AppHeader";
import { fetchAPI } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

const AppFooter = dynamic(() => import("../components/AppFooter"));

function MyApp({ Component, pageProps, footer }) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
      <AppFooter {...footer} />
    </>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const [footer, appProps] = await Promise.all([
    fetchAPI("dohm-footer"),
    App.getInitialProps(appContext),
  ]);

  return {
    ...appProps,
    footer: {
      title: footer.title,
      content: await markdownToHtml(footer.content),
    },
  };
};

export default MyApp;

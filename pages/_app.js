import "../styles/styles.scss";
import App from "next/app";
import AppHeader from "../components/AppHeader";
import AppFooter from "../components/AppFooter";
import { getFooter } from "../lib/api";
import markdownToHtml from "../lib/markdownToHtml";

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
    getFooter(),
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

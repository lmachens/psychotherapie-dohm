import "../styles/globals.css";
import AppHeader from "../components/AppHeader";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <AppHeader />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;

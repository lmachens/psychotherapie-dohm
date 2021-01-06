import React from "react";
import Head from "next/head";

function AppHead({ title }) {
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="description"
        content="Psychotherapie von Lea Dohm (ehemals Lea Peplau) in Stadthagen"
      />
      <meta
        name="keywords"
        content="Lea Dohm, Lea Peplau, Psychotherapie Dohm, Psychotherapie Stadthagen, Peplau, Dohm Stadthagen, Psychologie Dohm, Dohm Therapeutin"
      />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

export default AppHead;

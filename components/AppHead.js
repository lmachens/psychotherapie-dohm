import React from "react";
import Head from "next/head";

function AppHead({ title }) {
  return (
    <Head>
      <title>{title}</title>
      <link rel="icon" href="/favicon.ico" />
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width"
      />
    </Head>
  );
}

export default AppHead;

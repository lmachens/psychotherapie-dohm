import React from "react";
import Head from "next/head";

function AppHead({ title }) {
  return (
    <Head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
}

export default AppHead;

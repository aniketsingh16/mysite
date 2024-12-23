import React from "react";
import Head from "next/head";

const ModuleCustomHead = () => (
    <Head>
        <title>Healthfirst Medicorp</title>
        <link rel="shortcut icon" href="/static/img/MAXHEALTH.svg" />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width" />
        <meta name="description" content="Healthfirst Medicorp" />
        <meta name="keywords" content="Healthfirst Medicorp" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,500;0,600;0,700;0,800;1,400&display=swap"
            rel="stylesheet"
        />
    </Head>
);

export default ModuleCustomHead;

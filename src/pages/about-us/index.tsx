import Footer from "@components/layouts/Footer";
import Header from "@components/shared/Header";
import Head from "next/head";
import React from "react";

function AboutUs() {
  return (
    <div>
      <Head>
        <title>A propos de nous</title>
        <meta
          name="description"
          content="Nous sommes une agence de dans le développement d'application mobiles et web, nous realisons aussi des affiches publicitaires et vous proposons des services de qualité et de qualité."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header title="A propos de nous" />
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;

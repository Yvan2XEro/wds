import React from "react";
import Head from "next/head";
import Navbar from "../../common/components/layouts/Navbar";
import Footer from "../../common/components/layouts/Footer";
import WaveSvg from "../../common/assets/svg/wave.svg";
import { motion } from "framer-motion";
import Card from "@components/shared/Card";
import Skills from "@components/shared/Skills";
import Header from "@components/shared/Header";

function services() {
  return (
    <div>
      <Head>
        <title>Nos services</title>
        <meta
          name="description"
          content="Les differents services que propose WDS agency"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header title="Nos services" />
        <section className="px-6">
          <div className="grid px-2 md:px-8 grid-cols-1 md:grid-cols-3">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </section>
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default services;

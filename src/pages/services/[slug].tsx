import Footer from "@components/layouts/Footer";
import Navbar from "@components/layouts/Navbar";
import Head from "next/head";
import React from "react";

export default function DeatilsService() {
  return (
    <div>
      <Head>
        <title>developpement d&apos;application mobiles</title>
        <meta
          name="description"
          content="developpement d'application mobiles"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Navbar />
        <main>
          <h1 className="text-5xl">developpement d&apos;application mobiles</h1>
        </main>
        <Footer />
      </div>
    </div>
  );
}

import Navbar from "@components/layouts/Navbar";
import { motion } from "framer-motion";
import Head from "next/head";
import WaveSvg from "../../common/assets/svg/wave.svg";
import React from "react";
import Footer from "@components/layouts/Footer";
import { ArticleBlog } from "@components/shared/Card";
import Header from "@components/shared/Header";

function Blog() {
  return (
    <div>
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Les articles au top de la technologie"
        />
      </Head>
      <div>
        <Header title="Blog" />
        <section className="px-6">
          <div className="grid px-2 md:px-8 grid-cols-1 md:grid-cols-2">
            <ArticleBlog />
            <ArticleBlog />
            <ArticleBlog />
            <ArticleBlog />
            <ArticleBlog />
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default Blog;

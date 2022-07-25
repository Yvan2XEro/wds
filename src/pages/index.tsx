import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../common/components/layouts/Navbar";
import HomeSvg from "../common/assets/svg/homebg.svg";
import Bg2 from "../common/assets/images/bg.jpg";
import Bg1 from "../common/assets/images/Animatedd.gif";
import WaveSvg from "../common/assets/svg/wave.svg";
import Card, { ArticleBlog } from "@components/shared/Card";
import AboutUs from "@components/shared/AboutUs";
import { motion } from "framer-motion";
import Footer from "@components/layouts/Footer";
import Statistcis from "@components/shared/Statistics";
import Link from "next/link";
import Image from "next/image";
import { serviceList } from "./services";
import { CgMail } from "react-icons/cg";
import { useFetch } from "src/common/hooks";
import { Post } from "src/common/types";
import { useEffect, useState } from "react";
import Spinner from "@components/shared/Spinner";
import { postsUrl } from "src/common/utils";
import { dataToPost } from "src/common/utils/dataToModels";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>WDS| l&apos;agence de service web et digitale</title>
        <meta
          name="description"
          content="agence de service web et digitale  spéclialisé dans le dévelopement d'application mobiles et web, nous realisons aussi des affiches publicitaires et vous proposons des services de qualité."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Navbar />
        <div className="w-full bg-primary-500">
          <div className="w-full items-center h-full px-8 md:px-16 mx-auto flex flex-wrap pt-5 mt-[55px]">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:flex-1 md:w-52 sm:mx-auto"
            >
              {/* <HomeSvg className="w-full" /> */}
              <img src={Bg2.src} className="w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="ml-10 md:flex-1 md:w-52 md:pl-3 sm:mx-auto sm:mt-10"
            >
              <h1 className="text-5xl text-white ">
                WEB AND DIGITAL SERVICES AGENCY
              </h1>
              <p className="mt-1 ml-2 text-white">
                Vous voulez une application WEB ou mobile pour votre structure?
                Vous avez besoin des affiches publicitaires pour votre
                entreprise? Vous desirez une assistance technique dans vos
                projets informatiques? Soumetez votre demande et nous vous
                assisterons le plus rapidement possible.
              </p>

              <div className="flex mt-4 pl-3">
                <Link href="/contacts">
                  <a className="relative flex items-center border-2 pr-1 justify-center group text-white transition-all rounded-3xl border-w border-white overflow-hidden group-hover:space-x-2 group-hover:text-white group-hover:primary-gradient before:w-0 before:h-full before:absolute before:bottom-0 before:transition-all before:duration-500 hover:before:w-full before:left-0 before:bg-white before:rounded-3xl">
                    <CgMail
                      size={35}
                      className="inline-block rounded-3xl p-1 mr-2 z-10 bg-white text-primary-500 h-full transition-all hover:left-1 "
                    />
                    <span className="inline-block font-bold transition-all group-hover:text-primary-500 z-10 group-hover:ml-1 mr-1">
                      Nous contacter
                    </span>
                  </a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
        <WaveSvg className="block min-w-full" />
        <div className="flex items-center justify-center px-6 mx-auto lg:px-16 lg:py-0">
          <section className="">
            <div className="max-w-lg md:mx-3">
              <h2 className="text-4xl font-bold">Nos services</h2>
              <p>
                Découvrez à present les services succeptibles de faire évoluer
                votre entreprise.
              </p>
            </div>
            <div className="px-2 mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {serviceList()}
              </div>
              <div className="mt-32">
                <AboutUs withMore={true} />
              </div>
              <Statistcis />
              <div className="mt-20">
                <h2 className="text-4xl font-bold">Nouveautés sur le blog</h2>
                <Articles />
              </div>
              <Link href="/blog">
                <a className="block mt-5 text-primary-300">
                  Voir plus d&apos; aticles
                </a>
              </Link>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

const Articles = () => {
  const { loading, error, data } = useFetch(postsUrl("&limit=6"), undefined);
  const [posts, setPosts] = useState<Post[]>([]);
  useEffect(() => {
    if (data) setPosts(data.data?.map(dataToPost));
  }, [data]);
  if (loading) return <Spinner className="pt-8" />;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {posts.map((a) => (
        <ArticleBlog key={a.title} data={a} />
      ))}
    </div>
  );
};

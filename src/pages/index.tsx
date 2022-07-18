import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../common/components/layouts/Navbar";
import HomeSvg from "../common/assets/svg/homebg.svg";
import WaveSvg from "../common/assets/svg/wave.svg";
import Card, { ArticleBlog } from "@components/shared/Card";
import AboutUs from "@components/shared/AboutUs";
import { FaChevronRight, FaRegSmileBeam } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "@components/layouts/Footer";
import Statistcis from "@components/shared/Statistics";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Navbar />
        <div className="bg-primary-500  w-full">
          <div className="w-full items-center h-full px-4 mx-auto flex flex-wrap mt-[55px]">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="md:flex-1 md:w-52 sm:mx-auto"
            >
              <HomeSvg className="w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="ml-10 md:flex-1 md:w-52 sm:mx-auto sm:mt-10"
            >
              <h1 className="text-5xl font-bold text-white ">WDS Agency</h1>
              <p className="mt-1 text-white">
                We are a team of web developers and designers who create high
                quality websites and web applications. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Vero commodi, alias aut
                officia ducimus quasi inventore saepe, quod expedita,
                exercitationem sint cupiditate praesentium suscipit ad delectus
                rem nam possimus harum.
              </p>
            </motion.div>
          </div>
        </div>
        <WaveSvg className="min-w-full block" />
        <div className="flex items-center justify-center px-6 py-2 mx-auto lg:px-16 lg:py-0">
          <section className=" md:mt-36">
            <div className="max-w-lg md:mx-3">
              <h2 className="text-4xl font-bold">Nos services</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat perferendis inventore veniam assumenda, quod
                consequuntur!
              </p>
            </div>
            <div className="px-2 mt-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                <Card />
                <Card />
                <Card />
              </div>
              <div className="mt-32">
                <AboutUs withMore={true} />
              </div>
              <Statistcis />
              <div className="mt-20">
                <h2 className="text-4xl font-bold">Nouveautes sur le blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {[1, 2, 3, 4].map((e) => (
                    <ArticleBlog key={e} />
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;

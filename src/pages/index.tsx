import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../common/components/layouts/Navbar";
import HomeSvg from "../common/assets/svg/homebg.svg";
import WaveSvg from "../common/assets/svg/wave.svg";
import Card from "@components/shared/Card";
import AboutUs from "@components/shared/AboutUs";
import { FaChevronRight, FaRegSmileBeam } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from "@components/layouts/Footer";

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
              initial={{ x: 200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="ml-10 md:flex-1 md:w-52 sm:mx-auto"
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
        <WaveSvg className="md:w-full md:block" />
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
                <AboutUs />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 rounded-none shadow-none">
                <StatisticCard
                  count={323}
                  icon={
                    <FaRegSmileBeam
                      size={60}
                      className="text-primary-300 mx-auto"
                    />
                  }
                  text="Clients satisfaits"
                />
                <StatisticCard
                  count={323}
                  icon={
                    <FaRegSmileBeam
                      size={60}
                      className="text-primary-300 mx-auto"
                    />
                  }
                  text="Projets acheves"
                />
                <StatisticCard
                  count={323}
                  icon={
                    <FaRegSmileBeam
                      size={60}
                      className="text-primary-300 mx-auto"
                    />
                  }
                  text="Projets acheves"
                />
                <StatisticCard
                  count={323}
                  icon={
                    <FaRegSmileBeam
                      size={60}
                      className="text-primary-300 mx-auto"
                    />
                  }
                  text="Projets acheves"
                />
              </div>
              <div className="mt-20">
                <h2 className="text-4xl font-bold">Nouveautes sur le blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {[1, 2, 3, 4].map((e) => (
                    <div key={e} className="min-h-[400px] mx-2 pb-1 card mt-7">
                      <div className="overflow-hidden rounded-tr-lg rounded-bl-lg">
                        <img
                          className="w-full max-h-[300px] object-cover"
                          src="https://source.unsplash.com/random"
                          alt="Sunset in the mountains"
                        />
                      </div>
                      <h6 className="text-xl my-2 uppercase text-primary-500">
                        Developpement // Android
                      </h6>
                      <a href="#" className="inline-block text-2xl font-medium">
                        Lorem, ipsum dolor.
                      </a>
                      <p className="text-base text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptatibus quia, nulla! Maiores et perferendis
                        eaque, exercitationem praesentium nihil.
                      </p>
                      <motion.a
                        whileHover={{
                          scale: 1.1,
                          boxShadow: "0px 0px 10px #00000080",
                          transition: { yoyo: Infinity, duration: 0.2 },
                        }}
                        href="#"
                        className="btn-primary"
                      >
                        Lire plus <FaChevronRight className="inline" />
                      </motion.a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
        <WaveSvg className="md:w-full md:block sm:opacity-0 rotate-180 -bottom-2" />
        <Footer />
      </div>
    </div>
  );
};

export default Home;

type IStatisticCardProps = {
  count: number;
  icon: any;
  text: string;
};
const StatisticCard = ({ count, icon, text }: IStatisticCardProps) => {
  return (
    <>
      <div className="card text-center py-5">
        <h2 className="text-primary-300 text-3xl">
          <span className="text-4xl font-bold">{count}</span>+
        </h2>
        <p className="my-3 text-xl">{text}</p>
        <div className="mx-auto">{icon}</div>
      </div>
    </>
  );
};

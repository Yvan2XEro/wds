import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../common/components/layouts/Navbar";
import HomeSvg from "../common/assets/svg/homebg.svg";
import WaveSvg from "../common/assets/svg/wave.svg";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-primary-500 relative">
        <Navbar />
        <div className="pb-[30px] h-[75vh]  bg-[red]">
          {/* <div className="container items-center h-full px-4 mx-auto md:flex">
            <div className="md:flex-1 md:w-52">
              <HomeSvg className="w-full" />
            </div>
            <div className="ml-10 md:flex-1 md:w-52">
              <h1 className="text-[40px] font-bold text-white text-center">
                WDS Agency
              </h1>
              <p className="text-white ">
                We are a team of web developers and designers who create high
                quality websites and web applications. Lorem ipsum dolor, sit
                amet consectetur adipisicing elit. Vero commodi, alias aut
                officia ducimus quasi inventore saepe, quod expedita,
                exercitationem sint cupiditate praesentium suscipit ad delectus
                rem nam possimus harum.
              </p>
            </div>
          </div> */}
          <div className="w-full">
            <img src="wave.svg" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
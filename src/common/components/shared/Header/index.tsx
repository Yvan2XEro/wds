import Navbar from "@components/layouts/Navbar";
import React from "react";
import { motion } from "framer-motion";
import WaveSvg from "../../../assets/svg/wave.svg";

type HeaderPropsType = {
  title: string;
};
function Header({ title }: HeaderPropsType) {
  return (
    <>
      <Navbar />
      <div className="mt-[50px] p-[20px]  bg-primary-500 items-center">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-[50px] text-center md:px-32 text-white text-7xl "
        >
          {title}
        </motion.h1>
      </div>
      <WaveSvg className="md:w-full md:block " />
    </>
  );
}

export default Header;

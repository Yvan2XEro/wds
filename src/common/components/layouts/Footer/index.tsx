import { motion } from "framer-motion";
import Link from "next/link";
import React, { useMemo } from "react";
import { FaMapMarkerAlt, FaPhone, FaVoicemail } from "react-icons/fa";
import Logo from "../../../assets/logos/logo1.png";

export default function Footer() {
  return (
    <footer className="px-6 py-8 bg-primary-500 lg:px-16 lg:py-0">
      <div className="py-8">
        <div className="flex items-center justify-between flex-1">
          <Link href="#">
            <a>
              <img src={Logo.src} className="w-[70px] h-[60px] mt-[10px]" />
            </a>
          </Link>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div className="relative">
            <h2 className="text-white text-3xl my-4 font-bold before:mt-[35px] after:rounded before:rounded after:mt-[35px] before:w-[45px] before:left-[20px] before:absolute before:bg-white before:h-[4px]  after:w-[15px] after:left-[0px] after:absolute after:bg-white after:h-[4px]">
              Contacts
            </h2>
            <ul>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <FaVoicemail size={30} className="round block" />
                <span className="block ml-2">
                  <Link href="#">
                    <a className="block">info@wds.bys</a>
                  </Link>
                  <Link href="#">
                    <a className="block">support@wds.bys</a>
                  </Link>
                </span>
              </motion.li>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <FaPhone size={30} className="round block" />
                <span className="block ml-2">
                  <Link href="#">
                    <a className="block">+237 678 987 654</a>
                  </Link>
                  <Link href="#">
                    <a className="block">+237 678 987 654</a>
                  </Link>
                </span>
              </motion.li>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <FaMapMarkerAlt size={30} className="round block" />
                <span className="block ml-2">
                  Dschang, Cameroun, Ngui-foreke
                </span>
              </motion.li>
            </ul>
          </div>
          <div className="relative">
            <h2 className="text-white text-3xl my-4 font-bold before:mt-[35px] after:rounded before:rounded after:mt-[35px] before:w-[65px] before:left-[20px] before:absolute before:bg-white before:h-[4px]  after:w-[15px] after:left-[0px] after:absolute after:bg-white after:h-[4px]">
              Nos liens
            </h2>
            <ul>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <Link href="#">
                  <a className="block">Acceuil</a>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <Link href="#">
                  <a className="block">Services</a>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <Link href="#">
                  <a className="block">Blog</a>
                </Link>
              </motion.li>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <Link href="#">
                  <a className="block">FAQs</a>
                </Link>
              </motion.li>
            </ul>
          </div>
          <div className="relative">
            <h2 className="text-white text-3xl my-4 font-bold before:mt-[35px] after:rounded before:rounded after:mt-[35px] before:w-[85px] before:left-[20px] before:absolute before:bg-white before:h-[4px]  after:w-[15px] after:left-[0px] after:absolute after:bg-white after:h-[4px]">
              Nos services
            </h2>
            <ul>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <a href="#" className="block">
                  Web design
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <a href="#" className="block">
                  Infographie
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <a href="#" className="block">
                  Developpement de sites web
                </a>
              </motion.li>
              <motion.li
                whileHover={{ scaleX: 1.1, originX: -1 }}
                className="flex mt-3 text-white cursor-pointer items-center"
              >
                <a href="#" className="block">
                  Developpement d'applications mobiles
                </a>
              </motion.li>
            </ul>
          </div>
        </div>
        <Copyrigth />
      </div>
    </footer>
  );
}
const Copyrigth = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <div className="flex justify-center items-center mt-10">
      <p className="text-white text-sm">
        © {year} <span className="font-bold">WDS</span>. All rights reserved.
      </p>
    </div>
  );
};

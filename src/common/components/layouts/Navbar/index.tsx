import React from "react";
import "./styles.module.css";
import Logo from "../../../assets/logos/logo1.png";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="bg-primary-500 fixed top-0 left-0 w-full z-10">
      {/*  fixed top-0 left-0 w-full z-10 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex flex-wrap items-center px-6 py-2 lg:px-16 lg:py-0"
      >
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-between flex-1"
        >
          <Link href="/">
            <img src={Logo.src} className="w-[55px] h-[40px] mt-[10px]" />
          </Link>
        </motion.div>

        <motion.label
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          htmlFor="menu-toggle"
          className="block pointer-cursor lg:hidden"
        >
          <svg
            className="text-[white] fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
          >
            <title>menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
          </svg>
        </motion.label>
        <input className="hidden" type="checkbox" id="menu-toggle" />

        <motion.div
          className="hidden w-full lg:flex lg:items-center lg:w-auto"
          id="menu"
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <nav>
            <AnimatePresence>
              <ul className="items-center justify-between pt-4 text-base text-[white] lg:flex lg:pt-0">
                <li>
                  <Link href="/">
                    <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 duration-100 hover:border-[white]">
                      Acceuil
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 duration-100 hover:border-[white]">
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="block px-0 py-3 border-b-2 border-transparent lg:p-4 duration-100 hover:border-[white]">
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="block px-0 py-3 mb-2 border-b-2 border-transparent lg:p-4 duration-100 hover:border-[white] lg:mb-0">
                      A propos
                    </a>
                  </Link>
                </li>
              </ul>
            </AnimatePresence>
          </nav>
          <Link href="#">
            <a className="flex items-center justify-start mb-4 lg:ml-4 lg:mb-0 pointer-cursor">
              <img
                className="w-10 h-10 border-2 border-transparent rounded-full duration-100 hover:border-[white]"
                src="https://gitlab.com/uploads/-/system/user/avatar/6049371/avatar.png?width=400"
                alt="User avatar"
              />
            </a>
          </Link>
        </motion.div>
      </motion.div>
    </header>
  );
}

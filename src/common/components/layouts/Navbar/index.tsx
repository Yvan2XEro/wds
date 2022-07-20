import React, { useEffect } from "react";
import "./styles.module.css";
import Logo from "../../../assets/logos/logo1.png";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function Navbar() {
  const router = useRouter();
  //add event listener to detect when the user scrolls and change the navbar background color
  useEffect(() => {
    // handleNavbarStyleOnScroll();
  }, []);

  const handleNavbarStyleOnScroll = () => {
    window.addEventListener("scroll", () => {
      const navbar = document.querySelector("#navbar");
      const logo = document.querySelector("#logo");
      if (window.scrollY > 100) {
        navbar?.classList.remove("text-[white]");
        navbar?.classList.add("bg-white");
        navbar?.classList.add("text-primary-500");
        navbar?.classList.add("border-primary-500");
        navbar?.classList.add("border-b-2");
      } else {
        navbar?.classList.add("text-[white]");
        navbar?.classList.remove("bg-white");
        navbar?.classList.remove("text-primary-500");
        navbar?.classList.remove("border-primary-500");
        navbar?.classList.remove("border-b-2");
      }
    });
  };

  return (
    <header
      id="navbar"
      className="bg-primary-500 text-[white] fixed top-0 left-0 w-full z-20"
    >
      {/* sm:border-white sm:border-b-2 */}
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
            <Image
              id="logo"
              src={Logo.src}
              height={40}
              width={55}
              className="w-[55px] h-[40px] mt-[10px]"
            />
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
            className="fill-current "
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
              <ul className="items-center justify-between text-base sm:pt-4 lg:flex lg:pt-0">
                <li>
                  <Link href="/">
                    <a className="inline-block px-0 py-3 duration-700 border-b-2 border-transparent lg:p-4 hover:border-white focus:bg-none">
                      Acceuil
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/services">
                    <a className="inline-block px-0 py-3 duration-700 border-b-2 border-transparent lg:p-4 hover:border-white focus:bg-none">
                      Services
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog">
                    <a className="inline-block px-0 py-3 duration-700 border-b-2 border-transparent lg:p-4 hover:border-white focus:bg-none">
                      Blog
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us">
                    <a className="inline-block px-0 py-3 duration-700 border-b-2 border-transparent lg:p-4 hover:border-white focus:bg-none lg:mb-0">
                      A propos
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/contacts">
                    <a className="inline-block px-0 py-3 duration-700 border-b-2 border-transparent lg:p-4 hover:border-white focus:bg-none lg:mb-0">
                      Contacts
                    </a>
                  </Link>
                </li>
              </ul>
            </AnimatePresence>
          </nav>
        </motion.div>
      </motion.div>
    </header>
  );
}

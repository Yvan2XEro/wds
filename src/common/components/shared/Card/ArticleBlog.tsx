import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

export function ArticleBlog() {
  return (
    <div className="min-h-[400px] mx-2 pb-1 card mt-7">
      <div className="overflow-hidden rounded-tr-lg rounded-bl-lg">
        <motion.img
          whileHover={{ scaleX: 1.1 }}
          className="w-full max-h-[300px] object-cover"
          src="https://source.unsplash.com/random"
          alt="Sunset in the mountains"
        />
      </div>
      <h6 className="text-xl my-2 uppercase text-primary-500">
        Developpement // Android
      </h6>
      <Link href="/blog/developpement-android-react-native">
        <a className="inline-block text-2xl font-medium">Lorem, ipsum dolor.</a>
      </Link>
      <p className="text-base text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
      <Link href="/blog/developpement-android-react-native">
        <a>
          <motion.span
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 10px #00000080",
              transition: { yoyo: Infinity, duration: 0.2 },
            }}
            className="btn-primary"
          >
            Lire plus <FaChevronRight className="inline" />
          </motion.span>
        </a>
      </Link>
    </div>
  );
}

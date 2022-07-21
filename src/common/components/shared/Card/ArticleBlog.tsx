import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { slugify } from "src/common/utils";

// article blog object
const a = {
  title: "Developement avec React et Next.js",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil`,
  id: "1",
  category: "Developpement web",
};

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
      <h6 className="my-2 text-xl uppercase text-primary-500">{a.category}</h6>
      <Link href="/blog/developpement-android-react-native">
        <a className="inline-block text-2xl font-medium">{a.title}</a>
      </Link>
      <p className="text-base text-gray-700">{a.text}</p>
      <Link href={`/blog/${slugify(a.title)}-${a.id}`}>
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

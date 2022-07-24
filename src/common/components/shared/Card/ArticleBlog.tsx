import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Post } from "src/common/types";
import { asset, slugify, substring } from "src/common/utils";

type ArticleBlogPropsType = {
  data: Post;
};

export function ArticleBlog({ data }: ArticleBlogPropsType) {
  const url = `/blog/${slugify(data.title, data.id)}`;
  return (
    <div className="min-h-[400px] mx-2 pb-1 card mt-7">
      <div className="overflow-hidden rounded-tr-lg rounded-bl-lg">
        <motion.img
          whileHover={{ scaleX: 1.1 }}
          className="w-full max-h-[300px] object-cover"
          src={asset(data.image)}
          alt="Sunset in the mountains"
        />
      </div>
      <h6 className="my-2 text-xl uppercase text-primary-500">
        {data.category.label}
      </h6>
      <Link href={url}>
        <a className="inline-block text-2xl font-medium">{data.title}</a>
      </Link>
      <p className="text-base text-gray-700">
        <ReactMarkdown>{substring(data.text, 300)}</ReactMarkdown>
      </p>
      <Link href={url}>
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

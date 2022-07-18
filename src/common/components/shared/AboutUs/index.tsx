import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

type AboutUsPropsType = {
  withMore: boolean;
};
export default function AboutUs({ withMore = true }: AboutUsPropsType) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-4">
        <img
          src="https://source.unsplash.com/random"
          alt="About us image"
          className="rounded-md md:h-[340px] md:w-[510px] lg:h-[432px] lg:w-[649px] object-cover"
        />
      </div>
      <div className="px-4 mt-2">
        <h6 className="outline-rounded">A propos de nous</h6>
        <h2 className="mt-2 text-4xl font-bold">
          Nous somme une equipe creative
        </h2>
        <p className="mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
          eveniet ab quasi ratione quisquam hic maiores dolores illo expedita
          doloremque provident, eum blanditiis ut obcaecati alias? Saepe,
          quibusdam unde. Esse?
        </p>
        <ul role="list" className="mt-5">
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-pink inline-block mr-3"
              size={25}
            />
            Lorem ipsum dolor sit amet.
          </li>
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-pink inline-block mr-3"
              size={25}
            />
            Lorem ipsum dolor sit amet.
          </li>
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-pink inline-block mr-3"
              size={25}
            />
            Lorem ipsum dolor sit amet.
          </li>
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-pink inline-block mr-3"
              size={25}
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </li>
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-pink inline-block mr-3"
              size={25}
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </li>
        </ul>
        {withMore && (
          <Link href="/about-us">
            <a>
              <motion.span
                whileHover={{
                  scale: 1.1,
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
                  transition: { yoyo: Infinity, duration: 0.2 },
                }}
                className="btn-primary"
              >
                Voir plus.
              </motion.span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

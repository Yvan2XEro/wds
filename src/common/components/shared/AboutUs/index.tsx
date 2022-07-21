import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import SolitionMindset from "src/common/assets/images/solution_mindset.png";

type AboutUsPropsType = {
  withMore: boolean;
};
export default function AboutUs({ withMore = true }: AboutUsPropsType) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-4">
        <img
          src={SolitionMindset.src}
          alt="About us image"
          className="rounded-md md:h-[340px] md:w-[510px] lg:h-[432px] lg:w-[649px] object-cover"
        />
      </div>
      <div className="px-4 mt-2">
        <h2 className="mt-2 text-4xl font-bold">
          Nous proposons des solutions éfficaces.
        </h2>
        <p className="mt-3">
          Nous sommes une équipe de professionnels, nous combinons nos
          expériences et nos connaissances pour vous mettre en place des
          applications et d'autres stratégies pour faire placer votre entreprise
          aux yeux du monde.
        </p>
        <ul role="list" className="mt-5">
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-primary-300 inline-block mr-3"
              size={25}
            />
            Lorem ipsum dolor sit amet.
          </li>
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-primary-300 inline-block mr-3"
              size={25}
            />
            Lorem ipsum dolor sit amet.
          </li>
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-primary-300 inline-block mr-3"
              size={25}
            />
            Lorem ipsum dolor sit amet.
          </li>
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-primary-300 inline-block mr-3"
              size={25}
            />
            Lorem ipsum dolor sit amet, consectetur adipisicing.
          </li>
          <li className="mt-1 before:border-cyan-900">
            <FaRegCheckCircle
              className="text-primary-300 inline-block mr-3"
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

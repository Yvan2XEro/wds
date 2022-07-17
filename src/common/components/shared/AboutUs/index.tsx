import React from "react";
import { FaRegCheckCircle } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="px-4">
        <img
          src="https://source.unsplash.com/random"
          alt="About us image"
          className="rounded-md md:h-[340px] md:w-[510px] lg:h-[432px] lg:w-[649px]"
        />
      </div>
      <div className="px-4 mt-2">
        <h6 className="inline-block p-2 px-3 text-xl uppercase border-2 border-primary-300 text-primary-300 rounded-xl">
          A propos de nous
        </h6>
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
        <a
          href="#"
          className="rounded-[100px] min-w-[150px] text-center bg-gradient-to-r from-sky-500 to-indigo-500 text-white text-lg font-bold p-2 mt-5 inline-block"
        >
          Voir plus.
        </a>
      </div>
    </div>
  );
}

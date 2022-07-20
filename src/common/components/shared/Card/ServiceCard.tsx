import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Service } from "src/common/types";

export function ServiceCard({ icon, title, text, id }: Service) {
  return (
    <div className="relative p-4 mb-6 transition-all duration-500 rounded-lg shadow-xl group md:mx-2 hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-white">
      <div className="m-3 text-primary-300 group-hover:text-white">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{text}</p>
      <div className="relative flex mt-2 opacity-70 group-hover:opacity-100">
        <Link href={`/contacts?service=${id}`}>
          <a className="relative block p-3 transition-all text-primary-500">
            <span className="relative flex items-center justify-between p-2 rounded-lg group-hover:space-x-2 group-hover:text-white group-hover:primary-gradient before:w-0 before:h-1 before:absolute before:bottom-0 before:right-0 before:bg-primary-500 before:transition-all before:duration-500 hover:before:w-full hover:before:left-0 hover:before:bg-white before:rounded-xl">
              <span className="">Decouvrir maintenant</span>
              <FaChevronRight className="ml-2" />
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
}

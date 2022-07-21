import React from "react";
import { Work } from "src/common/types";
import { FiExternalLink } from "react-icons/fi";
import { RiExternalLinkLine } from "react-icons/ri";

export function WorkCard({ image, link, label }: Omit<Work, "category">) {
  return (
    <div className="max-h-[350px] mx-2 rounded card overflow-hidden group m-5">
      <img
        src={image}
        className="w-full transition-all hover:scale-105 object-cover"
        alt="Sunset in the mountains"
      />
      <p className="w-full text-center my-2 text-xl">
        <a href={link} target="blanck" className="flex">
          <span className="block mt-[2px]">{label}</span>
          <RiExternalLinkLine size={25} className="block ml-1" />
        </a>
      </p>
    </div>
  );
}

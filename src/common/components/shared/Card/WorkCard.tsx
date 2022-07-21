import React from "react";
import { Work } from "src/common/types";

export function WorkCard({ image, link, label }: Work) {
  return (
    <div className="max-h-[350px] mx-2 rounded card overflow-hidden group m-5">
      <img
        src={image}
        className="w-full transition-all hover:scale-105 object-cover"
        alt="Sunset in the mountains"
      />
      <p className="absolute opacity-0 w-full group-hover:opacity-100 bg-opacity-70 bg-white left-0 p-6 bottom-5">
        <a
          href={link}
          target="blanck"
          className="hover:underline font-bold text-primary-500"
        >
          {label}
        </a>
      </p>
    </div>
  );
}

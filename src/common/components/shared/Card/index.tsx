import React from "react";

export default function Card() {
  return (
    <article className="mt-3 card md:mx-3">
      <div className="overflow-hidden rounded-tr-lg rounded-bl-lg">
        <img
          className="w-full max-h-[300px] object-cover"
          src="https://source.unsplash.com/random"
          alt="Sunset in the mountains"
        />
      </div>
      <h5 className="mt-3 text-2xl font-medium ">Lorem, ipsum dolor.</h5>
      <p className="text-base text-gray-700">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
        quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
        nihil.
      </p>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full bg-primary-300">
          #photography
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full bg-primary-300">
          #travel
        </span>
        <span className="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold text-white rounded-full bg-primary-300">
          #winter
        </span>
      </div>
    </article>
  );
}

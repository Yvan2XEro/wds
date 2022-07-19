import React from "react";
import { Service } from "src/common/types";

export function ServiceCard({ icon, title, text }: Service) {
  return (
    <div className="overflow-hidden relative shadow-xl group md:mx-2 p-4 mb-6 transition-colors rounded-lg hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-[white]">
      {/* hover:bg-gradient-to-r from-sky-500 to-indigo-500 hover:text-[white]  */}
      <div className="m-3 text-primary-300 group-hover:text-white">{icon}</div>
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{text}</p>
      {/* <div className="absolute duration-500 transition-all  rounded-[50%] group-hover:-translate-x-[50%] group-hover:-translate-y-[50%] bg-[blue] h-[350px] w-[350px] -right-full -bottom-full -z-[1] top-[50%] group-hover:left-[50%] after:rounded-[50%] group-hover:after:-translate-x-[50%] group-hover:after:-translate-y-[50%] after:absolute after:bg-[red] after:h-[170px] after:w-[170px] after:-right-full after:-bottom-full after:-z-[1] after:top-[50%] group-hover:after:left-[50%]"></div> */}
    </div>
  );
}
// before:rounded-[50%] group-hover:before:-translate-x-[50%] group-hover:before:-translate-y-[50%] before:bg-[red] before:h-[350px] before:w-[350px] before:-right-full before:-bottom-full before:-z-[1]

// before:rounded-[50%] group-hover:before:-translate-x-[50%] group-hover:before:-translate-y-[50%] before:absolute before:bg-[red] before:h-[150px] before:w-[150px] before:-right-full before:-bottom-full before:-z-[1] before:top-[50%] group-hover:before:left-[50%]

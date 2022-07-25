import React from "react";
import Skill from "../Skill";
import { SERVICES_DATA } from "src/pages/services";

function Skills() {
  return (
    <div className="">
      <div className="grid grid-cols-1 mb-20 md:grid-cols-2">
        <div className="px-8 md:px-16">
          <img
            src="https://source.unsplash.com/random"
            className="rounded-md md:h-[340px] md:w-[510px] lg:h-[432px] lg:w-[649px] object-cover"
          />
        </div>
        <div className="px-8 mt-2">
          <h6 className="outline-rounded">Nos compétences</h6>
          <h2 className="text-4xl font-bold">
            Nous avons de bons experiences dans nos domaines de services
          </h2>
          <ul>
            {SERVICES_DATA.map((s) => (
              <li key={s.id} className="relative">
                <Skill percent={90} title={s.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;

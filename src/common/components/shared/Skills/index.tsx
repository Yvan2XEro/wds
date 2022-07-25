import React from "react";
import Skill from "../Skill";
import { SERVICES_DATA } from "src/pages/services";
import Confirmed from "../../../assets/images/Confirmed.png";

function Skills() {
  return (
    <>
      <div className="grid grid-cols-1 mb-20 md:grid-cols-2">
        <div className="px-8 md:px-16">
          <img
            src={Confirmed.src}
            className="rounded-md md:h-[340px] md:w-[510px] lg:h-[432px] lg:w-[649px] object-cover"
          />
        </div>
        <div className="px-8 mt-2">
          <h6 className="text-2xl">Nos compétences</h6>
          <h2 className="text-4xl font-bold">
            Nos clients sont toujours satisfaits de nos services
          </h2>
          <ul>
            {SERVICES_DATA.map((s) => (
              <li key={s.id} className="relative">
                <Skill
                  percent={s.skillPercent || 16}
                  key={s.id}
                  title={s.title}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Skills;

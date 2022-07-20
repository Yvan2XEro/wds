import React from "react";
import Skill from "../Skill";
import Noconection from "../../../assets/images/no-connection.gif";
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
      <div className="px-8 md:px-16 md:flex">
        <div className="mt-10 md:w-[50%]">
          <h6 className="mb-1 outline-rounded">Nos services</h6>
          <h2 className="mb-2 text-4xl font-bold">
            Derrière l'histoire de l'agence numérique WDS
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            debitis nesciunt, recusandae quos nam optio, magni doloremque
            dignissimos, inventore hic eum aspernatur ab. Consequuntur, laborum
            commodi. Similique ipsam laudantium laborum blanditiis iure sit
            officia quam tenetur voluptatem iste. Modi, quia.Consequuntur,
            laborum commodi. Similique ipsam laudantium laborum blanditiis iure
            sit officia quam tenetur voluptatem iste. Modi, quia.
          </p>
        </div>
        <div className="">
          <img
            src={Noconection.src}
            alt="Image no connection"
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;

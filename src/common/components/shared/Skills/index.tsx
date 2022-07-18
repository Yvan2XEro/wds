import React from "react";
import Skill from "../Skill";
function Skills() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 mt-20 mb-20">
      <div className="px-8 md:px-16">
        <img
          src="https://source.unsplash.com/random"
          className="rounded-md md:h-[340px] md:w-[510px] lg:h-[432px] lg:w-[649px] object-cover"
        />
      </div>
      <div className="px-8 mt-2">
        <h6 className="outline-rounded">Nos skils</h6>
        <h2 className="text-4xl font-bold">
          Nous avons de bons experiences dans nos domaines de services
        </h2>
        <ul>
          <li className="relative">
            <Skill percent={90} title="Sites et applications WEBs" />
          </li>
          <li className="relative">
            <Skill percent={90} title="Infographie" />
          </li>
          <li className="relative">
            <Skill percent={90} title="UI/UX Design" />
          </li>
          <li className="relative">
            <Skill percent={90} title="Applications mobiles" />
          </li>
          <li className="relative">
            <Skill percent={90} title="SEO Optimization" />
          </li>
        </ul>
      </div>
      <div className="px-8 md:px-16 grid grid-cols-1 md:grid-cols-2">
        <div className="mt-20">
          <h6 className="outline-rounded mb-1">Nose services</h6>
          <h2 className="text-4xl font-bold mb-2 md:min-w-[400px]">
            Derrière l'histoire de l'agence numérique WDS
          </h2>
          <div className="md:md:min-w-[400px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
            debitis nesciunt, recusandae quos nam optio, magni doloremque
            dignissimos, inventore hic eum aspernatur ab. Consequuntur, laborum
            commodi. Similique ipsam laudantium laborum blanditiis iure sit
            officia quam tenetur voluptatem iste. Modi, quia.Consequuntur,
            laborum commodi. Similique ipsam laudantium laborum blanditiis iure
            sit officia quam tenetur voluptatem iste. Modi, quia.
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;

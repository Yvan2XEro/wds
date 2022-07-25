import React from "react";
import Head from "next/head";
import Footer from "../../common/components/layouts/Footer";
import { ServiceCard } from "@components/shared/Card";
import Skills from "@components/shared/Skills";
import Header from "@components/shared/Header";
import { CgWebsite } from "react-icons/cg";
import { ImMobile } from "react-icons/im";
import { BiLineChart } from "react-icons/bi";
import { BsCardHeading } from "react-icons/bs";
import { MdDraw, MdManageAccounts } from "react-icons/md";
import { Service } from "src/common/types";
import Socials from "@components/shared/Socials";
import Noconection from "../../common/assets/images/no-connection.gif";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate cumque quas officia inventore fugit.";
export const SERVICES_DATA: Service[] = [
  {
    id: 1,
    icon: <CgWebsite size={70} />,
    title: "Developpement d'applications et sites WEB",
    text,
  },
  {
    id: 2,
    icon: <ImMobile size={70} />,
    title: "Developpement d'applications mobiles",
    text,
  },
  {
    id: 3,
    icon: <BiLineChart size={70} />,
    title: "Optimisation SEO",
    text,
  },
  {
    id: 4,
    icon: <MdDraw size={70} />,
    title: "Designs UI/UX",
    text,
  },
  {
    id: 5,
    icon: <MdManageAccounts size={70} color="" />,
    title: "Assistance technique",
    text,
  },
  {
    id: 6,
    icon: <BsCardHeading size={70} />,
    title: "Affiches publicitaires & cartes de visites",
    text,
  },
];
export function serviceList() {
  return SERVICES_DATA.map((s) => <ServiceCard key={s.title} {...s} />);
}
function services() {
  return (
    <div>
      <Head>
        <title>Nos services</title>
        <meta
          name="description"
          content="Les differents services que propose WDS agency"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header title="Nos services" />

        <div className="px-8 md:px-16 ">
          <div className="md:flex">
            <div className="mt-10 md:w-[50%]">
              <h6 className="mb-1 outline-rounded">Nos services</h6>
              <h2 className="mb-2 text-4xl font-bold">
                Derrière l&apos;histoire de l&apos;agence numérique WDS
              </h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo
                debitis nesciunt, recusandae quos nam optio, magni doloremque
                dignissimos, inventore hic eum aspernatur ab. Consequuntur,
                laborum commodi. Similique ipsam laudantium laborum blanditiis
                iure sit officia quam tenetur voluptatem iste. Modi,
                quia.Consequuntur, laborum commodi. Similique ipsam laudantium
                laborum blanditiis iure sit officia quam tenetur voluptatem
                iste. Modi, quia.
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
        <section className="px-6 mb-20">
          <div className="grid grid-cols-1 px-2 md:px-8 md:grid-cols-3">
            {serviceList()}
          </div>
        </section>
        <div className="md:mr-8">
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default services;

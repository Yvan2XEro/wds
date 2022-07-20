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

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate cupiditate cumque quas officia inventore fugit.";
const SERVICES_DATA: Service[] = [
  {
    icon: <CgWebsite size={70} />,
    title: "Developpement d'applications WEB",
    text,
  },
  {
    icon: <ImMobile size={70} />,
    title: "Developpement d'applications WEB",
    text,
  },
  {
    icon: <BiLineChart size={70} />,
    title: "Optimisation SEO",
    text,
  },
  {
    icon: <BsCardHeading size={70} />,
    title: "Affiches publicitaires & cartes de visites",
    text,
  },
  {
    icon: <MdDraw size={70} />,
    title: "Designs UI/UX",
    text,
  },
  {
    icon: <MdManageAccounts size={70} color="" />,
    title: "Assistance technique",
    text,
  },
];
export function serviceList() {
  return SERVICES_DATA.map((s) => <ServiceCard {...s} />);
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
        <section className="px-6 mb-20">
          <div className="grid grid-cols-1 px-2 md:px-8 md:grid-cols-3">
            {serviceList()}
          </div>
        </section>
        <Skills />
      </div>
      <Footer />
    </div>
  );
}

export default services;

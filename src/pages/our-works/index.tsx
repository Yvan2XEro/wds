import Footer from "@components/layouts/Footer";
import Header from "@components/shared/Header";
import Head from "next/head";
import React from "react";
import Colaborators from "../../common/assets/images/collaborators.png";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { Work, WorkCategory } from "src/common/types";
import Portfolio from "@components/shared/Portfolio";

function OurWorks({
  works,
  categories,
}: {
  works: Work[];
  categories: WorkCategory[];
}) {
  return (
    <div>
      <Head>
        <title>Nos traveaux</title>
        <meta
          name="description"
          content="Quelques travaux réalisés par notre agence ces derniers ans"
        />
      </Head>
      <div>
        <Header title="Nos traveaux" />
      </div>
      <div className="mx-8">
        <Approach />
        <div className="md:mx-16 mt-10">
          <h2 className="text-3xl text-center">
            Quelques realisations durant ces derniers annees
          </h2>
          <Portfolio works={works} categories={categories} />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default OurWorks;

export const getServerSideProps = async () => {
  return {
    props: {
      works: [
        {
          id: 1,
          link: "https://eparchemin.com",
          label: "Plateforme ADEFTO",
          image,
          category: {
            id: 1,
            label: "Web",
          },
        },
        {
          id: 1,
          link: "https://eparchemin.com",
          label: "Plateforme ADEFTO",
          image,
          category: categories[0],
        },
        {
          id: 1,
          link: "https://eparchemin.com",
          label: "Plateforme ADEFTO",
          image,
          category: categories[1],
        },
        {
          id: 1,
          link: "https://eparchemin.com",
          label: "Plateforme ADEFTO",
          image,
          category: categories[2],
        },
      ],
      categories,
    },
  };
};
const categories = [
  {
    id: 1,
    label: "Sites Web",
  },
  {
    id: 2,
    label: "Applications Mobile",
  },
  {
    id: 3,
    label: "Designs UI/UX",
  },
  {
    id: 4,
    label: "Logiciels PC",
  },
  {
    id: 5,
    label: "Infographie",
  },
];

const image =
  "https://firebasestorage.googleapis.com/v0/b/ero-coding-space.appspot.com/o/projects%2Feparchemin%2FScreenshot_20211106_234158-1.png?alt=media&token=2ab87b21-eb2f-46aa-b9e2-917227fa55a0";

const Approach = () => {
  return (
    <>
      <div className="md:px-20 md:flex">
        <img
          className="max-w-[350px]"
          src={Colaborators.src}
          alt="Collaboration image"
        />
        <div className="px-2 md:max-w-md md:mx-20">
          <h2 className="sm:text-center text-4xl md:text-5xl">
            Notre approche
          </h2>
          <p>
            <RiDoubleQuotesL />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            adipisci? Expedita, consequatur. Ut voluptates minima nam eveniet
            culpa tempora, nesciunt impedit, natus exercitationem quis quod!
            <RiDoubleQuotesR className="ml-auto" />
          </p>
        </div>
      </div>
    </>
  );
};

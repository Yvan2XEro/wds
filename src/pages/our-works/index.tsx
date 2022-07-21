import Footer from "@components/layouts/Footer";
import Header from "@components/shared/Header";
import Head from "next/head";
import React from "react";
import Colaborators from "../../common/assets/images/collaborators.png";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import Carousel from "react-multi-carousel";
import Card, { UserCard, WorkCard } from "@components/shared/Card";
import "react-multi-carousel/lib/styles.css";
import { Work } from "src/common/types";

function OurWorks({ works }: { works: Work[] }) {
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
        <Portfolio />
      </div>
      <Footer />
    </div>
  );
}

export default OurWorks;

const Portfolio = () => {
  return (
    <div className="md:mx-16">
      <div className="flex justify-end">
        <ul className="flex flex-wrap justify-center">
          <li className="text-xl mx-1 text-primary-500 font-bold primary-gradient rounded p-1 px-2 inline-block ">
            <a href="#">Tout</a>
          </li>
          <li className="p-1 px-2 inline-block text-xl mx-1 text-primary-500 font-bold">
            <a href="#">Sites WEBS</a>
          </li>
          <li className="p-1 px-2 inline-block text-xl mx-1 text-primary-500 font-bold">
            <a href="#">Applications mobiles</a>
          </li>
          <li className="p-1 px-2 inline-block text-xl mx-1 text-primary-500 font-bold">
            <a href="#">Designs UI</a>
          </li>
          <li className="p-1 px-2 inline-block text-xl mx-1 text-primary-500 font-bold">
            <a href="#">DInfographie</a>
          </li>
        </ul>
      </div>
      <div className="cursor-grab w-full">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          // autoPlaySpeed={1000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {works.map((w) => (
            <WorkCard
              key={w.id + w.label}
              label={w.label}
              link={w.link}
              image={w.image}
            />
          ))}
        </Carousel>
      </div>
    </div>
  );
};
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Approach = () => {
  return (
    <div className="">
      <div className="md:px-20 md:flex">
        <img
          className="max-w-[350px]"
          src={Colaborators.src}
          alt="Collaboration image"
        />
        <div className="px-2">
          <h2 className="text-center text-3xl">Notre approche</h2>
          <p>
            <RiDoubleQuotesL />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
            adipisci? Expedita, consequatur. Ut voluptates minima nam eveniet
            culpa tempora, nesciunt impedit, natus exercitationem quis quod!
            <RiDoubleQuotesR className="ml-auto" />
          </p>
        </div>
      </div>
    </div>
  );
};

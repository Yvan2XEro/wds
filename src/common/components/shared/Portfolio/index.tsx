import { Work, WorkCategory } from "src/common/types";
import Carousel from "react-multi-carousel";
import { WorkCard } from "../Card";
import "react-multi-carousel/lib/styles.css";
import { useCallback, useState } from "react";

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

type PortFolioPropsType = {
  works: Work[];
  categories: WorkCategory[];
};
const Portfolio = ({ works, categories }: PortFolioPropsType) => {
  const [seleCtedCategory, setSelectedCategory] = useState<number | null>(null);
  const [filteredWorks, setFilteredWorks] = useState<Work[]>(works);
  const handleFilter = useCallback((id: number | null) => {
    setSelectedCategory(id);
    if (id === null) {
      setFilteredWorks(works);
    } else {
      setFilteredWorks(works.filter((work) => work.category.id === id));
    }
  }, []);
  return (
    <>
      <div className="flex justify-end mt-5">
        <ul className="flex flex-wrap justify-center">
          <li
            className={`text-xl mx-1  font-bold rounded p-1 px-2 inline-block ${
              seleCtedCategory === null
                ? " primary-gradient text-white"
                : "text-primary-500"
            }`}
          >
            <button type="button" onClick={() => handleFilter(null)}>
              Tout
            </button>
          </li>
          {categories.map((c) => (
            <li
              key={c.id}
              className={`text-xl mx-1  font-bold rounded p-1 px-2 inline-block ${
                seleCtedCategory === c.id
                  ? " primary-gradient text-white"
                  : "text-primary-500"
              }`}
            >
              <button type="button" onClick={() => handleFilter(c.id)}>
                {c.label}
              </button>
            </li>
          ))}
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
          {filteredWorks.map((w) => (
            <WorkCard
              key={w.id + w.label}
              label={w.label}
              link={w.link}
              image={w.image}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Portfolio;

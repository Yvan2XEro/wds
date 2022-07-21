import { Work, WorkCategory } from "src/common/types";
import { WorkCard } from "../Card";
import "react-multi-carousel/lib/styles.css";
import { useCallback, useState } from "react";
import AppCarousel from "../AppCarousel";

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
      <div className="flex justify-end my-10">
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
        <AppCarousel>
          {filteredWorks.map((w) => (
            <WorkCard
              key={w.id + w.label}
              label={w.label}
              link={w.link}
              image={w.image}
            />
          ))}
        </AppCarousel>
      </div>
    </>
  );
};

export default Portfolio;

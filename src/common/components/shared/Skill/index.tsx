import React, { useEffect, useState } from "react";

type SkillPrpos = {
  title: string;
  percent: number;
  key: number;
};
function Skill({ title, percent: p, key }: SkillPrpos) {
  const [width, setWidth] = useState("w-100");
  useEffect(() => {
    switch (p) {
      case 99:
        setWidth("before:w-[99%]");
        break;
      case 95:
        setWidth("before:w-[95%]");
        break;
      case 90:
        setWidth("before:w-[90%]");
        break;
      case 85:
        setWidth("before:w-[85%]");
        break;
      case 70:
        setWidth("before:w-[70%]");
      case 80:
        setWidth("before:w-[80%]");
        break;
      case 70:
        setWidth("before:w-[70%]");
      default:
        break;
    }
  }, [key, p]);
  return (
    <div
      id={"skill-" + key}
      className={`relative mt-6 flex justify-between after:rounded before:rounded after:h-[10px] after:bg-primary-500 after:w-full after:block after:absolute after:-bottom-[10px]  before:bg-primary-300 ${width} before:block before:absolute before:-bottom-[10px] before:h-[10px] before:z-10`}
    >
      <span className="inline-block">{title}</span>
      <span className="inline-block">{p}%</span>
    </div>
  );
}

export default Skill;

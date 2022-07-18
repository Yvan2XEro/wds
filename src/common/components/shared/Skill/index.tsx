import React from "react";

type SkillPrpos = {
  title: string;
  percent: number;
};
function Skill({ title, percent }: SkillPrpos) {
  return (
    <div
      className={`relative mt-6 flex justify-between after:rounded before:rounded after:h-[10px] after:bg-primary-500 after:w-full after:block after:absolute after:-bottom-[10px]  before:bg-primary-300 before:w-[90%] before:block before:absolute before:-bottom-[10px] before:h-[10px] before:z-10`}
    >
      <span className="inline-block">{title}</span>
      <span className="inline-block">{percent}%</span>
    </div>
  );
}

export default Skill;

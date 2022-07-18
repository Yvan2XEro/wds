import React from "react";
import { FaRegSmileBeam } from "react-icons/fa";

function Statistcis() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-5 rounded-none shadow-none">
      <StatisticCard
        count={323}
        icon={<FaRegSmileBeam size={60} className="text-primary-300 mx-auto" />}
        text="Clients satisfaits"
      />
      <StatisticCard
        count={323}
        icon={<FaRegSmileBeam size={60} className="text-primary-300 mx-auto" />}
        text="Projets acheves"
      />
      <StatisticCard
        count={323}
        icon={<FaRegSmileBeam size={60} className="text-primary-300 mx-auto" />}
        text="Projets acheves"
      />
      <StatisticCard
        count={323}
        icon={<FaRegSmileBeam size={60} className="text-primary-300 mx-auto" />}
        text="Projets acheves"
      />
    </div>
  );
}

export default Statistcis;

type IStatisticCardProps = {
  count: number;
  icon: any;
  text: string;
};
const StatisticCard = ({ count, icon, text }: IStatisticCardProps) => {
  return (
    <>
      <div className="card text-center py-5">
        <h2 className="text-primary-300 text-3xl">
          <span className="text-4xl font-bold">{count}</span>+
        </h2>
        <p className="my-3 text-xl">{text}</p>
        <div className="mx-auto">{icon}</div>
      </div>
    </>
  );
};

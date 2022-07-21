import React from "react";
import { FaRegSmileBeam, FaBusinessTime } from "react-icons/fa";
import { GiRocketFlight, GiPartyPopper } from "react-icons/gi";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

function Statistcis() {
  return (
    <div className="grid grid-cols-1 mt-20 rounded-none shadow-none md:grid-cols-3 lg:grid-cols-4">
      <StatisticCard
        count={323}
        icon={<FaRegSmileBeam size={60} className="mx-auto text-primary-300" />}
        text="Clients satisfaits"
      />
      <StatisticCard
        count={323}
        icon={<GiRocketFlight size={60} className="mx-auto text-primary-300" />}
        text="Projets encours"
      />
      <StatisticCard
        count={323}
        icon={<GiPartyPopper size={60} className="mx-auto text-primary-300" />}
        text="Projets acheves"
      />
      <StatisticCard
        count={323}
        icon={<FaBusinessTime size={60} className="mx-auto text-primary-300" />}
        text="Jours de travails"
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
      <div className="py-5 text-center card sm:mt-2">
        <h2 className="text-3xl text-primary-300">
          <span className="text-4xl font-bold" daata-val={count}>
            <CountUp end={count}>
              {({ countUpRef, start }) => (
                <VisibilitySensor onChange={start} delayedCall>
                  <span ref={countUpRef} />
                </VisibilitySensor>
              )}
            </CountUp>
          </span>
          +
        </h2>
        <p className="my-3 text-xl">{text}</p>
        <div className="mx-auto">{icon}</div>
      </div>
    </>
  );
};

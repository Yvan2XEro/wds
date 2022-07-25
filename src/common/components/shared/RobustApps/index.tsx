import React from "react";
import FastLoading from "../../../assets/images/fast_loading.png";

function RobustApps() {
  return (
    <>
      <div className="grid grid-cols-1 mb-20 md:grid-cols-2">
        <div className="px-8 md:px-16">
          <img
            src={FastLoading.src}
            className="rounded-md md:h-[340px] md:w-[510px] lg:h-[432px] lg:w-[649px] object-cover"
            width={100}
            height={100}
          />
        </div>
        <div className="px-8 mt-2">
          <h6 className="text-2xl">Services de qualitées</h6>
          <h2 className="text-4xl font-bold">
            Nous proposons des appplications robustes et performantes
          </h2>
          <p>
            Les performances des applications que nous produisons comptent
            beaucoup pour nos clients et nous. Nous ne nous contentons pas
            seulement de produire des belles applications fonctionnelles, mais
            nous nous intérressons aussi aux performances et aux expériences
            utilisateurs afin de préserver leurs connections aux services de nos
            clients.
          </p>
        </div>
      </div>
    </>
  );
}

export default RobustApps;

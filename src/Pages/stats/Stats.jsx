import React from "react";
import Chart from "./Chart";
import { useContext } from "react";
import { TbChartPieOff } from "react-icons/tb";
import CommunicationContext from "../../context/ContextHook";
import { NavLink } from "react-router";

const Stats = () => {
  const { interaction } = useContext(CommunicationContext);

  return (
    <div className="max-w-277.5  w-11/12 mx-auto my-20 space-y-10">
      <h1 className="font-bold md:text-5xl text-3xl text-[#1f2937FF]">
        Friendship Analytics
      </h1>

      <div className="md:w-full w-11/12 mx-auto p-8 border border-gray-200 rounded-md">
        <h3 className="text-gray-800 font-semibold text-lg text-center mb-4">
          Interaction Breakdown
        </h3>
        <div className="flex justify-center items-center mt-10">
          {interaction.length === 0 ? (
            <div className="flex flex-col items-center justify-center my-20 text-gray-400">
              <TbChartPieOff size={80} className="opacity-30" />
              <h2 className="text-2xl font-bold text-center mt-4">
                No Chart Found
              </h2>
              <p className="text-sm text-center">
                Log a Call, Video, or Text to see the Chart.
              </p>
            </div>
          ) : (
            <Chart interaction={interaction}></Chart>
          )}
        </div>
      </div>
      <div className="flex justify-center">
        <NavLink to="/">
          <button className="btn mx-auto w-auto md:w-xl btn-dash">Go Back</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Stats;

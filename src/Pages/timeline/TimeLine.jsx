import React, { useContext, useState } from "react";
import CommunicationContext from "../../context/ContextHook";
import { MdOutlineSpeakerNotesOff } from "react-icons/md";
import Cards from "./Cards";

const TimeLine = () => {
  const { interaction } = useContext(CommunicationContext);
  const [filter, setFilter] = useState("all");

  const filteredData =
    filter === "all"
      ? interaction
      : interaction.filter((i) => i.interactionType === filter);

  return (
    <div className="max-w-5xl w-11/12 mx-auto py-16 space-y-8">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
        Activity Timeline
      </h1>

      <div className="flex justify-center gap-3 flex-wrap">
        <button
          onClick={() => setFilter("all")}
          className={`px-4 py-1.5 rounded-full border ${
            filter === "all" ? "bg-[#244d3f] text-white" : ""
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("text")}
          className={`px-4 py-1.5 rounded-full border ${
            filter === "text" ? "bg-[#244d3f] text-white" : ""
          }`}
        >
          Text
        </button>
        <button
          onClick={() => setFilter("call")}
          className={`px-4 py-1.5 rounded-full border ${
            filter === "call" ? "bg-[#244d3f] text-white" : ""
          }`}
        >
          Call
        </button>
        <button
          onClick={() => setFilter("video")}
          className={`px-4 py-1.5 rounded-full border ${
            filter === "video" ? "bg-[#244d3f] text-white" : ""
          }`}
        >
          Video
        </button>
      </div>

      {interaction.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20 text-gray-400">
          <MdOutlineSpeakerNotesOff size={70} className="opacity-30" />
          <h2 className="text-xl font-semibold mt-4">No activity yet</h2>
          <p className="text-sm text-center">
            Start interacting to build your timeline
          </p>
        </div>
      ) : filteredData.length === 0 ? (
        <p className="text-center text-gray-400">
          No {filter} interaction found
        </p>
      ) : (
        <div className="space-y-4">
          {filteredData.map((item, i) => (
            <Cards key={i} data={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TimeLine;

import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="flex gap-4 items-start border-l-2 border-[#244d3f] pl-4 py-3 shadow-xl">
      <div className="w-10 h-10 shrink-0">
        <img
          src={data.image}
          alt=""
          className="w-full h-full object-cover rounded-full"
        />
      </div>

      <div className="space-y-1">
        <p className="text-gray-800 text-sm">
          <span className="font-semibold capitalize">
            {data.interactionType}
          </span>{" "}
          with <span className="font-medium">{data.naming}</span>
        </p>

        <p className="text-xs text-gray-500">
          {data.date.month} {data.date.day}, {data.date.year}
        </p>
      </div>
    </div>
  );
};

export default Cards;

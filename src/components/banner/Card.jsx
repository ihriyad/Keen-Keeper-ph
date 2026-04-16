import React from "react";

const Card = ({ item }) => {
  const { count, title } = item;
  return (
    <div
      className={`p-5 text-center border border-slate-100 rounded-lg
        transition-all duration-300 hover:scale-105 hover:shadow-xl
        ${
        title === "On Track"
          ? "bg-green-400/50"
          : title === "Needs Attention"
            ? "bg-red-400/50"
            : title === "Interactions This Month"
              ? "bg-amber-100"
              : "bg-amber-50"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-semibold ">
        {count}
      </h2>
      <p className="text-gray-600 text-sm">{title}</p>
    </div>
  );
};

export default Card;

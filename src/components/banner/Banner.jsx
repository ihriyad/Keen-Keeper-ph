import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

const Banner = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const total = data.length;
  const onTrack = data.filter((d) => d.status === "on track").length;
  const needAttention = data.filter((d) => d.status !== "on track").length;

  const interactionsThisMonth = data.reduce(
    (acc, cur) => acc + (cur.days_since_contact <= 30 ? 1 : 0),
    0,
  );

  const info = [
    { count: total, title: "Total Friends" },
    { count: onTrack, title: "On Track" },
    { count: needAttention, title: "Need Attention" },
    { count: interactionsThisMonth, title: "This Month" },
  ];

  return (
    <div className="max-w-6xl w-11/12 mx-auto mt-16 pb-10 border-b">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          Stay connected effortlessly
        </h1>

        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
          Keep track of your important people and never lose touch again.
        </p>

        <button className="bg-[#244d3fFF] text-white px-5 py-2.5 rounded-md flex items-center gap-2 mx-auto">
          <FaPlus /> Add Friend
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {info.map((item, i) => (
          <div
            key={i}
            className="text-center p-5 rounded-lg border hover:shadow-sm transition"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#244d3fFF]">
              {item.count}
            </h2>
            <p className="text-gray-500 text-sm">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;

import React from "react";
import { FaPlus } from "react-icons/fa";
import useFriends from "../../hooks/useFriends";
import Card from "./Card"

const Banner = () => {
  const { friends, loading } = useFriends();

  if (loading) return null;

  const total = friends.length;
  const onTrack = friends.filter((f) => f.status === "on track").length;
  const needAttention = friends.filter((f) => f.status !== "on track").length;
  const interactions = friends.filter((f) => f.connected <= 30).length;

  const info = [
    { count: total, title: "Total Friends" },
    { count: onTrack, title: "On Track" },
    { count: needAttention, title: "Needs Attention" },
    { count: interactions, title: "Interactions This Month" },
  ];

  return (
    <div className="max-w-6xl w-11/12 mx-auto md:mt-4 pb-10">
      <div className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 text-center">
          Friends to keep close in your life
        </h1>
        <p className="text-[#64748bFF] text-center">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the <br />
          relationships that matter most.
        </p>
        <h1 className="text-gray-600 font-semibold text-3xl text-center">
          Stay connected{" "}
          <span className="text-green-500  reveal inline-block">
            effortlessly.
          </span>
        </h1>
        <button className="bg-green-400 font-semibold px-5 py-2.5 rounded-md flex items-center gap-2 mx-auto cursor-pointer">
          <FaPlus /> Add Friend
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
        {info.map((item, i) => (
          <Card key={i} item={item}></Card>
        ))}
      </div>
    </div>
  );
};

export default Banner;

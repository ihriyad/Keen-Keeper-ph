import React from "react";
import { NavLink } from "react-router";

const FriendsCard = ({ friend }) => {
  const { id, picture, name, connected, status, tags } = friend;
  return (
    <NavLink
      to={`/home/${id}`}
      className="card flex justify-center items-center flex-col border border-gray-200 p-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <figure className="w-20 h-20 rounded-full overflow-hidden transition-transform duration-300 hover:scale-110">
        <img
          src={picture}
          alt="My friend"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="space-y-2 flex flex-col justify-center items-center mt-3">
        <h1 className="text-[#1f2937FF] text-center font-semibold text-xl">
          {name}
        </h1>
        <p className="text-[#64748bFF] text-center">{connected}day ago</p>
        <div className="text-center space-x-1 ">
          {tags.map((tag, i) => (
            <div
              key={i}
              className="badge rounded-full bg-gray-400/20 text-black"
            >
              {tag}
            </div>
          ))}
        </div>
        <div
          className={`
            w-full
            badge rounded-full 
             font-medium 
            py-3 px-4 mt-3
            ${
              status === "overdue"
                ? "bg-red-400/50"
                : status === "almost due"
                  ? "bg-amber-100"
                  : status === "on track"
                    ? "bg-green-400/50"
                    : ""
            }`}
        >
          {status}
        </div>
      </div>
    </NavLink>
  );
};

export default FriendsCard;

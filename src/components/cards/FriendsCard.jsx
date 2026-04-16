import React from "react";
import { NavLink } from "react-router";

const FriendsCard = ({ friend }) => {
  const { id, picture, name, connected, status, tag } = friend;
  return (
    <NavLink
      to={`/home/${id}`}
      className="card flex justify-center items-center flex-col border-2 border-gray-200 p-6 rounded-md transition-all duration-300 hover:scale-105 hover:shadow-xl"
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
        <div
          className="text-center
         bg-green-400/50
          px-3 rounded-2xl
          font-medium
          text-[12px]
          mb-4
          "
        >
          {tag}
        </div>
        <div
          className={`
            badge rounded-full 
            text-white font-medium 
            py-3 px-4 
            ${
              status === "overdue"
                ? "badge-error"
                : status === "almost due"
                  ? "badge-warning"
                  : status === "on track"
                    ? "badge-success"
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

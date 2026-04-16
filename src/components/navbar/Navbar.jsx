import React, { useState } from "react";
import { NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { FaRegClock, FaChartLine } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive ? "bg-white/20 text-white" : "text-gray-300 hover:text-white"
    }`;

  return (
    <div className="backdrop-blur-md bg-[#111827]/80 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-white">keenKeeper</h1>

        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            <RiHome2Line /> Home
          </NavLink>
          <NavLink to="/timeline" className={linkClass}>
            <FaRegClock /> Timeline
          </NavLink>
          <NavLink to="/stats" className={linkClass}>
            <FaChartLine /> Stats
          </NavLink>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <NavLink to="/" end className={linkClass}>
            <RiHome2Line /> Home
          </NavLink>
          <NavLink to="/timeline" className={linkClass}>
            <FaRegClock /> Timeline
          </NavLink>
          <NavLink to="/stats" className={linkClass}>
            <FaChartLine /> Stats
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;

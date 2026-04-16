import React, { useState } from "react";
import { NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { FaRegClock, FaChartLine } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `font-semibold flex items-center gap-2 px-4 py-2 rounded-lg transition ${
      isActive ? "bg-green-400" : "hover:underline"
    }`;

  return (
    <div className="backdrop-blur-md border-b-2 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
        <h1 className="text-2xl font-bold">
          keen
          <span className="text-gray-400">Keeper</span>
        </h1>

        <div className="hidden md:flex items-center gap-2">
          <NavLink to="/" className={linkClass}>
            <RiHome2Line /> Home
          </NavLink>
          <NavLink to="/timeline" className={linkClass}>
            <FaRegClock /> Timeline
          </NavLink>
          <NavLink to="/stats" className={linkClass}>
            <FaChartLine /> Stats
          </NavLink>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <NavLink to="/" className={linkClass}>
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

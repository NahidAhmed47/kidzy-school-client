import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="space-y-3">
      <div className="side-nav">
        <FaHome className="w-7 h-7"></FaHome>
        <NavLink className='text-base font-bold '>Overview</NavLink>
      </div>
      <div className="side-nav">
        <FaHome className="w-7 h-7"></FaHome>
        <NavLink className='text-base font-bold '>Overview</NavLink>
      </div>
      <div className="side-nav">
        <FaHome className="w-7 h-7"></FaHome>
        <NavLink className='text-base font-bold '>Overview</NavLink>
      </div>
      <div className="side-nav">
        <FaHome className="w-7 h-7"></FaHome>
        <NavLink className='text-base font-bold '>Overview</NavLink>
      </div>
      <div className="side-nav">
        <FaHome className="w-7 h-7"></FaHome>
        <NavLink className='text-base font-bold '>Overview</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaExternalLinkAlt, FaPencilAlt, FaRegPaperPlane, FaUserFriends } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="space-y-5">
      <div className="side-nav">
        <FaHome className="w-6 h-6"></FaHome>
        <NavLink className='text-base font-bold '>Overview</NavLink>
      </div>
      <div className="side-nav">
        <FaPlus className="w-6 h-6"></FaPlus>
        <NavLink className='text-base font-bold '>Add Course</NavLink>
      </div>
      <div className="side-nav">
        <FaPencilAlt className="w-6 h-6"></FaPencilAlt>
        <NavLink className='text-base font-bold '>Updates</NavLink>
      </div>
      <div className="side-nav">
        <FaRegPaperPlane className="w-6 h-6"></FaRegPaperPlane>
        <NavLink className='text-base font-bold '>Published Courses</NavLink>
      </div>
      <div className="side-nav">
        <FaExternalLinkAlt className="w-6 h-6"></FaExternalLinkAlt>
        <NavLink className='text-base font-bold '>Preview</NavLink>
      </div>
      <div className="side-nav">
        <FaUserFriends className="w-6 h-6"></FaUserFriends>
        <NavLink className='text-base font-bold '>Students</NavLink>
      </div>
    </div>
  );
};

export default Sidebar;

import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaPlus, FaExternalLinkAlt, FaPencilAlt, FaRegPaperPlane, FaUserFriends, FaTrashAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="space-y-5">
      <NavLink className={({isActive})=> isActive ? 'dashboard-active' : 'side-nav'} to='overview'>
        <FaHome className="w-6 h-6"></FaHome>
        <div className='text-base font-bold '>Overview</div>
      </NavLink>
      <NavLink className={({isActive})=> isActive ? 'dashboard-active' : 'side-nav'} to='add-course'>
        <FaPlus className="w-6 h-6"></FaPlus>
        <div className='text-base font-bold '>Add Course</div>
      </NavLink>
      <NavLink className={({isActive})=> isActive ? 'dashboard-active' : 'side-nav'} to='updates'>
        <FaPencilAlt className="w-6 h-6"></FaPencilAlt>
        <div className='text-base font-bold '>Updates</div>
      </NavLink>
      <NavLink className={({isActive})=> isActive ? 'dashboard-active' : 'side-nav'} to='delete'>
        <FaTrashAlt className="w-6 h-6"></FaTrashAlt>
        <div className='text-base font-bold '>Delete</div>
      </NavLink>
      <NavLink className={({isActive})=> isActive ? 'dashboard-active' : 'side-nav'} to='published-courses'>
        <FaRegPaperPlane className="w-6 h-6"></FaRegPaperPlane>
        <div className='text-base font-bold '>Published Courses</div>
      </NavLink>
      <NavLink className={({isActive})=> isActive ? 'dashboard-active' : 'side-nav'} to='preview'>
        <FaExternalLinkAlt className="w-6 h-6"></FaExternalLinkAlt>
        <div className='text-base font-bold '>Preview</div>
      </NavLink>
      <NavLink className={({isActive})=> isActive ? 'dashboard-active' : 'side-nav'} to='students'>
        <FaUserFriends className="w-6 h-6"></FaUserFriends>
        <div className='text-base font-bold '>Students</div>
      </NavLink>
    </div>
  );
};

export default Sidebar;

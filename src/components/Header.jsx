import React, { useState } from 'react';
import { BookOpenIcon, UserCircleIcon, Bars3BottomRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    // automatic close responsive navbar
    const toggle = ()=>{
        setOpenMenu(!isOpenMenu)
    }
    return (
        <div className='py-3 md:py-4 px-3 md:px-0 border-b w-full'>
            <nav className='flex-center max-w-[1280px] mx-auto'>
            <div className='text-xl md:text-3xl font-bold flex items-center gap-2'>
                <BookOpenIcon className='w-6 h-6 md:w-8 md:h-8 secondary-text-color'></BookOpenIcon>
                <h1 className='primary-text-color'>Kid<span className='secondary-text-color'>zy</span> School</h1>
            </div>
            <span className='lg:hidden' onClick={toggle}>
                <Bars3BottomRightIcon className='w-6 h-6 text-black'></Bars3BottomRightIcon>
            </span>
            <ul className={isOpenMenu ? 'absolute top-14 bg-slate-200 p-5 right-10 items-start flex flex-col gap-2 font-semibold rounded z-10' : 'w-[65%] text-base font-semibold hidden lg:flex justify-between items-center'}>
                <NavLink to="/"  className={({isActive})=> (isActive ? 'isActive' : '')}>Home</NavLink>
                <NavLink to="/activity"  className={({isActive})=> (isActive ? 'isActive' : '')}>Activity</NavLink>
                <NavLink to="/departments"  className={({isActive})=> (isActive ? 'isActive' : '')}>Departments</NavLink>
                <NavLink to="/course"  className={({isActive})=> (isActive ? 'isActive' : '')}>Course</NavLink>
                <NavLink to="/contract"  className={({isActive})=> (isActive ? 'isActive' : '')}>Contract</NavLink>
                <NavLink to="/enrolled_course"  className={({isActive})=> (isActive ? 'isActive' : '')}><div className='relative' title='Enrolled course'><span className='badge'>0</span><ArrowDownTrayIcon className='w-5 h-5 '></ArrowDownTrayIcon></div></NavLink>
                <NavLink to="/bookmarked"  className={({isActive})=> (isActive ? 'isActive' : '')}><div className='relative' title='Bookmarked course'><span className='badge'>0</span><BookmarkIcon className='w-5 h-5 '></BookmarkIcon></div></NavLink>
                <div className='flex-center flex-col lg:flex-row gap-3 lg:ml-7'>
                    <NavLink to="/my-account"  className='flex-center '>
                        <p>My account</p>
                        <UserCircleIcon className='w-6 h-6 primary-text-color ml-2 '></UserCircleIcon>
                    </NavLink>
                    <NavLink to="/registration" >
                        <button className='btn'>Registration</button>
                    </NavLink>
                </div>
            </ul>
        </nav>
        </div>
    );
};

export default Header;
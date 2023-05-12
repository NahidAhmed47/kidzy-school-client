import React, { useContext, useEffect, useState } from 'react';
import { BookOpenIcon, Bars3BottomRightIcon, ArrowDownTrayIcon } from '@heroicons/react/24/solid'
import { BookmarkIcon } from '@heroicons/react/24/outline'
import {NavLink} from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const [isOpenMenu, setOpenMenu] = useState(false);
    const {user, LogOut} = useContext(AuthContext);
    const [openProfile, setOpenProfile] = useState(false);
    console.log(user?.email)
    useEffect(()=>{
        const url = `http://localhost:5000/all-users-role?email=${user?.email}`;
        fetch(url)
        .then(res => res.json())
        .then(data => console.log(data))
    },[user])
    // profile toggle
    const showProfile = () => {
        setOpenProfile(!openProfile);
    }
    // automatic close responsive navbar
    const toggle = ()=>{
        setOpenMenu(!isOpenMenu)
    }
    // handle log out
    const handleLogOut = ()=>{
        LogOut()
        .then()
        .catch(error=>{
            console.log(error)
        })
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
                <NavLink to="/courses"  className={({isActive})=> (isActive ? 'isActive' : '')}>Courses</NavLink>
                <NavLink to="/contract"  className={({isActive})=> (isActive ? 'isActive' : '')}>Contract</NavLink>
                <NavLink to="/enrolled_course"  className={({isActive})=> (isActive ? 'isActive' : '')}><div className='relative' title='Enrolled course'><span className='badge'>0</span><ArrowDownTrayIcon className='w-5 h-5 '></ArrowDownTrayIcon></div></NavLink>
                <NavLink to="/bookmarked"  className={({isActive})=> (isActive ? 'isActive' : '')}><div className='relative' title='Bookmarked course'><span className='badge'>0</span><BookmarkIcon className='w-5 h-5 '></BookmarkIcon></div></NavLink>
                {/* <div className='flex-center flex-col lg:flex-row gap-3 lg:ml-7'> */}
                <div className='flex gap-1 items-center relative'>
                    {user && <div  title={user.displayName}>
                        {
                            user.photoURL !== '' ? <img onClick={showProfile} className='w-12 h-12 rounded-full' src={user.photoURL}/> : <FaUserCircle className='w-7 h-7'></FaUserCircle>
                        }
                        </div>}
                    {!user ? <NavLink to="/login" className={'btn'}>Login</NavLink> : ''}
                    <div onClick={showProfile} className={`min-w-[250px] h-fit absolute z-10 rounded-md shadow-md hover:shadow-2xl bg-slate-700 py-8 px-5 ${openProfile ? 'top-12 right-7 ' : 'hidden'} `}>
                        <div className='w-[120px] h-[120px] mx-auto rounded-full border-2 border-[#E25111] overflow-hidden'>
                            <img src={user?.photoURL} className='w-[120px] h-[120px] mx-auto rounded-full' alt="profile" />
                        </div>
                        <div className='text-center  mt-5 '>
                            <h1 className='text-base'>Name: {user?.displayName}</h1>
                            <p className='text-xs mt-3'>Email: {user?.email}</p>
                            <p className={user?.emailVerified ? 'text-xs text-white mt-1' : 'text-xs text-red-500 mt-1'}>{user?.emailVerified ? "Your Email has been verified!" : "Your Email is not verified!"}</p>
                            <div  className='mt-4 px-3 py-1 rounded-full hover:bg-white hover:text-[#E25111]  hover:scale-[0.98] duration-200 origin-center bg-[#E25111] text-white w-1/2 mx-auto' onClick={handleLogOut}>Logout</div>
                        </div>
                    </div>
                </div>
            </ul>
        </nav>
        </div>
    );
};

export default Header;
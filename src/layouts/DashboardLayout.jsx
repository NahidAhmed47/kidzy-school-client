import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Sidebar from '../pages/TeachersPages/Dashboard/DashboardSidebar/Sidebar';

const DashboardLayout = () => {
    return (
        <>
        <Header></Header>
        <div className='min-h-[calc(100vh-81px)] max-w-[1280px] mx-auto grid md:grid-cols-9 md:grid-rows-6 '>
            <div className='md:col-start-1 col-end-3 row-span-full border px-7 py-10 bg-slate-100'>
                <Sidebar></Sidebar>
            </div>
            <div className='w-full md:col-start-3 col-end-[-1]  row-span-full'>
                <Outlet></Outlet>
            </div>
        </div>
        </>
    );
};

export default DashboardLayout;
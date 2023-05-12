import React, { createContext } from 'react';
import Header from '../components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';

export const AllDataContext = createContext([]);

const Main = () => {
    const {course_data} = useLoaderData();
    return (
        <AllDataContext.Provider value={course_data}>
            <div className='max-w-[1400px] mx-auto'>
                <div></div>
                 <Header></Header>
                 <div className='max-w-[1280px] mx-auto'>
                     <Outlet></Outlet>
                 </div>
             </div>
        </AllDataContext.Provider>
    );
};

export default Main;
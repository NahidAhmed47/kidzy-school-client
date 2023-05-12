import React, { createContext } from 'react';
import Header from '../pages/Shared/Header/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';

const Main = () => {
    return (
            <div>
                <div></div>
                 <Header></Header>
                 <div className='max-w-[1280px] mx-auto'>
                     <Outlet></Outlet>
                 </div>
                 <Footer></Footer>
            </div>
    );
};

export default Main;
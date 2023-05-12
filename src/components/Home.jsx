import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import onlineEducationAni from '../assets/online-learning.json';
import {PlayIcon} from '@heroicons/react/24/solid'
const Home = () => {
    return (
        <div className='grid md:grid-cols-2 w-full h-[calc(100vh-61px)]'>
            <div className='px-5 flex flex-col justify-center order-last md:order-1'>
                <h1 className='text-lg md:text-5xl font-extrabold secondary-text-color tracking-wide max-w-'>Learn and playing, It's time to achieve yours dreams!</h1>
                <p className='text-base font-medium text-slate-500 my-2 md:my-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas perferendis autem atque. Quia libero labore aliquam velit ad nesciunt aliquid ipsa, ipsum ipsam perspiciatis enim nobis culpa a fuga et provident, porro, commodi eligendi! Voluptatum pariatur voluptates modi reprehenderit quisquam!</p>
                <div className='md:w-1/3 flex md:justify-between items-center md:mt-3'>
                    <Link to='/course'>
                        <button className='btn'>Start Class</button>
                    </Link>
                    <Link to='/course'>
                        <button className='p-1 md:p-2 bg-orange-300 rounded-full hover:scale-[1.1] ml-4 md:ml-0'><PlayIcon className='w-6 h-6 primary-text-color'></PlayIcon></button>
                    </Link>
                </div>
            </div>
            <div className='w-full h-full md:order-2'>
                <Lottie className='w-full h-full' animationData={onlineEducationAni} loop={true}></Lottie>
            </div>
        </div>
    );
};

export default Home;
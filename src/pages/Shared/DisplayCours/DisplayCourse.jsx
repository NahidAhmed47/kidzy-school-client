import React from 'react';
import { Link } from 'react-router-dom';
import { BookmarkIcon } from '@heroicons/react/24/outline'

const DisplayCourse = ({course, handleId}) => {
    const {thumbnail, title, teacher, description, id} = course;
    return (
        <div className='p-2 md:p-3 border-2 rounded-md font-serif'>
            <img className='w-full rounded-md' src={thumbnail} alt="" />
            <div className='mt-1 md:mt-3'>
                <h1 className='text-base md:text-xl font-bold secondary-text-color '>{title}</h1>
                <p className='text-sm font-semibold text-slate-600'><span className='font-bold'>Teacher: </span>{teacher}</p>
                <p className='text-base text-slate-700 md:mt-2'>{description.substring(0,80)}...</p>
                <div className='w-full flex justify-end md:mt-2 items-center gap-2 md:gap-3'>
                    <Link><button className='flex items-center gap-1 hover:underline font-medium text-sm'><BookmarkIcon className='w-4 h-4'></BookmarkIcon> Bookmark</button></Link>
                    <button onClick={()=> handleId(id)} className='px-2 py-1 rounded text-base font-bold font-mono bg-[#500a96] text-white ml-auto hover:bg-violet-600 duration-200'>Enroll</button>
                </div>
            </div>
        </div>
    );
};

export default DisplayCourse;
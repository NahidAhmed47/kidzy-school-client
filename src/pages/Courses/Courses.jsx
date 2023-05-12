import React, { useContext, useState } from 'react';
import DisplayCourse from '../Shared/DisplayCours/DisplayCourse';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mt-5 md:mt-10'>
            {
                courses.map(course => <DisplayCourse key={course._id} course={course}></DisplayCourse>)
            }
        </div>
    );
};

export default Courses;
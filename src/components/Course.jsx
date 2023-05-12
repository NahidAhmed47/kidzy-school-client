import React, { useContext, useState } from 'react';
import DisplayCourse from './DisplayCourse';
import { AllDataContext } from '../layouts/Main';

const Course = () => {
    const courseData = useContext(AllDataContext);
    const [enrolledCourseList, setEnrolledCourseList] = useState([]);
    const handleId = (id)=>{
        let enrolledCourse = [];
        const enrolled = courseData.find(course => course.id === id);
        const existCourse = enrolledCourseList.find(course => course.id === enrolled.id);
        console.log(existCourse);
        if(!existCourse){
            enrolledCourse = [...enrolledCourseList, enrolled];
            console.log('ase');
        }
        else{
            enrolledCourse = [...enrolledCourseList];
        }
        setEnrolledCourseList(enrolledCourse);
    }
    return (
        <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 mt-5 md:mt-10'>
            {
                courseData.map(course => <DisplayCourse key={course.id} course={course} handleId={handleId}></DisplayCourse>)
            }
        </div>
    );
};

export default Course;
import React from 'react';

const Overview = () => {
    return (
        <div className='bg-slate-100 p-4 rounded-md'>
            <div className='grid md:grid-cols-3 md:gap-8'>
                <div className='px-3 py-5 bg-slate-200 rounded-md text-center'>
                    <h1 className='text-lg font-semibold primary-text-color'>Total Courses</h1>
                    <p className='text-base font-semibold'>00</p>
                </div>
                <div className='px-3 py-5 bg-slate-200 rounded-md text-center'>
                    <h1 className='text-lg font-semibold primary-text-color'>Published</h1>
                    <p className='text-base font-semibold'>00</p>
                </div>
                <div className='px-3 py-5 bg-slate-200 rounded-md text-center'>
                    <h1 className='text-lg font-semibold primary-text-color'>Total Sales</h1>
                    <p className='text-base font-semibold'>00</p>
                </div>
            </div>
        </div>
    );
};

export default Overview;
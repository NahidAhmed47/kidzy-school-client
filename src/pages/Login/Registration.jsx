import React from 'react';
import LoginAnimation from '../Shared/LoginAnimation/LoginAnimation';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div className='min-h-[80vh] mt-20'>
        <div className='flex  justify-around items-center max-container'>
        <div className=' hidden md:block'>
                    <LoginAnimation></LoginAnimation>
                </div>
            <div className=' bg-white border shadow-xl h-fit max-w-[400px] mt-20 rounded-md p-4 md:px-8 my-10'>
            {/* <p className='text-red-500 text-center my-2 '>{error}</p> */}
                <h1 className='font-bold text-2xl text-center primary-color'>Sign Up</h1>
                <div className='my-3'>
                    <form>
                        <input type="text" name='name' className='input-field' placeholder='Name' />
                        <input type="email" name='email' className='input-field' placeholder='Email' required/>
                        <input type="password" name='password' className='input-field' placeholder='Password' required/>
                        <input type="text" name='photo' className='input-field' placeholder='Photo url' />
                        <button className='text-lg font-semibold font-mono text-white bg-[#b6400e] w-full py-1 rounded mt-5 btn-hover-effect'>Register</button>
                    </form>
                    <div className='my-5 flex items-center justify-between'>
                        <hr className='w-[40%]'/>
                        <p className='text-slate-500'>or</p>
                        <hr className='w-[40%]'/>
                    </div>
                    <button className='sign-in-with-style btn-hover-effect' ><FaGoogle className='w-4 h-4'></FaGoogle>Create account with Google</button>
                    <button className='sign-in-with-style mt-3 btn-hover-effect' ><FaGithub className='w-4 h-4'></FaGithub>Create account with Github</button>
                </div>
                <p className='text-base text-center text-slate-600 mb-2'>Already have an account? Please <Link to="/login" className='text-red-500 underline'>Log in</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Registration;
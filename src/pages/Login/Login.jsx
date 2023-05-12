import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LoginAnimation from '../Shared/LoginAnimation/LoginAnimation';

const Login = () => {
    return (
        <div className='min-h-[80vh] my-10'>
            <div className='max-container flex justify-around items-center gap-10'>
            <div className=' hidden md:block'>
                    <LoginAnimation></LoginAnimation>
                </div>
                <div className=' bg-white border shadow-xl h-fit max-w-[400px] rounded-md p-4 md:px-8'>
                {/* <p className='text-red-500 text-center my-2 '></p> */}
                    <h1 className='font-bold text-2xl text-center primary-color'>Sign In</h1>
                    <div className='my-3'>
                        <form>
                            <input type="email" name='email' className='input-field' placeholder='Your Email' required/>
                            <input type="password" name='password' className='input-field' placeholder='Your Password' required/>
                            <button className='text-lg font-semibold font-mono text-white bg-[#b6400e] w-full py-1 rounded mt-5 btn-hover-effect'>Sign in</button>
                        </form>
                        <p className='text-center text-slate-600 mt-3'>Forget <span className='cursor-pointer hover:underline hover:text-red-400'>password</span> ?</p>
                        <div className='my-5 flex items-center justify-between'>
                            <hr className='w-[40%]'/>
                            <p className='text-slate-500'>or</p>
                            <hr className='w-[40%]'/>
                        </div>
                        <button className='sign-in-with-style btn-hover-effect'><FaGoogle className='w-4 h-4'></FaGoogle>Sign in with Google</button>
                        <button className='sign-in-with-style mt-3 btn-hover-effect'><FaGithub className='w-4 h-4'></FaGithub>Sign in with Github</button>
                    </div>
                    <p className='text-base text-center text-slate-600 mb-2'>Don't have an account? Please <Link to="/registration" className='text-red-500 underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
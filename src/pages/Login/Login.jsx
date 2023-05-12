import React, { useState } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom';
import LoginAnimation from '../Shared/LoginAnimation/LoginAnimation';

const Login = () => {
    const [loginMode, setLoginMode] = useState(true);
    const handleForm = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
    }
    return (
        <div className='min-h-[80vh] my-10'>
            <div className='max-container flex justify-around items-center gap-10'>
            <div className=' hidden md:block'>
                    <LoginAnimation></LoginAnimation>
                </div>
                <div className=' bg-white border shadow-xl h-fit max-w-[420px] rounded-md p-4 md:px-8 md:py-12'>
                {/* <p className='text-red-500 text-center my-2 '></p> */}
                    <div className='flex justify-between'>
                        <button onClick={()=>setLoginMode(true)} className={loginMode ? "font-bold text-lg text-center font-serif  px-4 py-1 border text-white bg-orange-600 rounded-xl border-[#EA580C]" : "font-bold text-lg text-center font-serif primary-text-color px-3 py-1 border rounded-xl border-[#EA580C]"}>Student Login</button>
                        <button onClick={()=>setLoginMode(false)} className={!loginMode ? "font-bold text-lg text-center font-serif  px-4 py-1 border text-white bg-orange-600 rounded-xl border-[#EA580C]" : "font-bold text-lg text-center font-serif primary-text-color px-3 py-1 border rounded-xl border-[#EA580C]"}>Teachers Login</button>
                    </div>
                    {
                        loginMode && <div className='my-5'>
                        <form onSubmit={handleForm}>
                            <input type="email" name='email' className='input-field' placeholder='Student Email' required/>
                            <input type="password" name='password' className='input-field' placeholder='Student Password' required/>
                            <button className='text-lg font-semibold font-mono text-white bg-orange-600 hover-login-btn w-full py-1 rounded mt-5 btn-hover-effect'>Student Login</button>
                        </form>
                        <p className='text-center text-slate-600 mt-3'>Forget <span className='cursor-pointer hover:underline hover:text-red-400'>password</span> ?</p>
                        <div className='my-5 flex items-center justify-between'>
                            <hr className='w-[40%]'/>
                            <p className='text-slate-500'>or</p>
                            <hr className='w-[40%]'/>
                        </div>
                        <button className='sign-in-with-style hover-login-btn'><FaGoogle className='w-4 h-4'></FaGoogle>Sign in with Google</button>
                        <button className='sign-in-with-style mt-3 hover-login-btn'><FaGithub className='w-4 h-4'></FaGithub>Sign in with Github</button>
                    </div>
                    }
                    {
                        loginMode || <div className='my-5'>
                        <form onSubmit={handleForm}>
                            <input type="email" name='email' className='input-field' placeholder='Teachers Email' required/>
                            <input type="password" name='password' className='input-field' placeholder='Teachers Password' required/>
                            <button className='text-lg font-semibold font-mono text-white bg-orange-600 hover-login-btn w-full py-1 rounded mt-5 btn-hover-effect'>Teachers Login</button>
                        </form>
                        <p className='text-center text-slate-600 mt-3'>Forget <span className='cursor-pointer hover:underline hover:text-red-400'>password</span> ?</p>
                        <div className='my-5 flex items-center justify-between'>
                            <hr className='w-[40%]'/>
                            <p className='text-slate-500'>or</p>
                            <hr className='w-[40%]'/>
                        </div>
                        <button className='sign-in-with-style hover-login-btn'><FaGoogle className='w-4 h-4'></FaGoogle>Sign in with Google</button>
                        <button className='sign-in-with-style mt-3 hover-login-btn'><FaGithub className='w-4 h-4'></FaGithub>Sign in with Github</button>
                    </div>
                    }
                    <p className='text-base text-center text-slate-600 mb-2'>Don't have an account? Please <Link to="/registration" className='text-red-500 underline'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
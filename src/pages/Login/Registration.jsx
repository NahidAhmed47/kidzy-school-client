import React, { useContext, useState } from 'react';
import LoginAnimation from '../Shared/LoginAnimation/LoginAnimation';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'

const Registration = () => {
    const [loginMode, setLoginMode] = useState(true);
    const {createUser, updateUser} = useContext(AuthContext);
    const [error, setError] = useState('')
    const handleForm = (e)=>{
        e.preventDefault();
        setError('')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;
        console.log(name, name, email, password, photoUrl)
        createUser(email, password)
        .then(result => {
            updateUser(name, photoUrl)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                  })
                
                form.reset()
            })
            .catch(err => {
                setError(err.message)
            })
            console.log(result.user)
        })
        .catch(err => {
            setError(err.message)
        })
    }
    return (
        <div className='min-h-[80vh] mt-20'>
        <div className='flex  justify-around items-center max-container'>
        <div className=' hidden md:block'>
                    <LoginAnimation></LoginAnimation>
                </div>
            <div className=' bg-white border shadow-xl h-fit max-w-[430px] mt-20 rounded-md p-4 md:px-8 md:py-12 my-10'>
            <p className='text-red-500 text-center my-2 '>{error}</p>
            <div className='flex justify-between'>
                        <button onClick={()=>setLoginMode(true)} className={loginMode ? "font-bold text-lg text-center font-serif  px-4 py-1 border text-white bg-orange-600 rounded-xl border-[#EA580C]" : "font-bold text-lg text-center font-serif primary-text-color px-3 py-1 border rounded-xl border-[#EA580C]"}>Student Signup</button>
                        <button onClick={()=>setLoginMode(false)} className={!loginMode ? "font-bold text-lg text-center font-serif  px-4 py-1 border text-white bg-orange-600 rounded-xl border-[#EA580C]" : "font-bold text-lg text-center font-serif primary-text-color px-3 py-1 border rounded-xl border-[#EA580C]"}>Teachers Signup</button>
                    </div>
                {
                    loginMode && <div className='my-3'>
                    <form onSubmit={handleForm}>
                        <input type="text" name='name' className='input-field' placeholder='Student Name' />
                        <input type="email" name='email' className='input-field' placeholder='Student Email' required/>
                        <input type="password" name='password' className='input-field' placeholder='Password' required/>
                        <input type="text" name='photo' className='input-field' placeholder='Photo url' />
                        <button className='text-lg font-semibold font-mono text-white bg-orange-600 w-full py-1 rounded mt-5 hover-login-btn'>Student Signup</button>
                    </form>
                    <div className='my-5 flex items-center justify-between'>
                        <hr className='w-[40%]'/>
                        <p className='text-slate-500'>or</p>
                        <hr className='w-[40%]'/>
                    </div>
                    <button className='sign-in-with-style hover-login-btn' ><FaGoogle className='w-4 h-4'></FaGoogle>Create account with Google</button>
                    <button className='sign-in-with-style mt-3 hover-login-btn' ><FaGithub className='w-4 h-4'></FaGithub>Create account with Github</button>
                </div>
                }
                {
                    loginMode || <div className='my-3'>
                    <form onSubmit={handleForm}>
                        <input type="text" name='name' className='input-field' placeholder='Teachers Name' />
                        <input type="email" name='email' className='input-field' placeholder='Teachers Email' required/>
                        <input type="password" name='password' className='input-field' placeholder='Password' required/>
                        <input type="text" name='photo' className='input-field' placeholder='Photo url' />
                        <button className='text-lg font-semibold font-mono text-white bg-orange-600 w-full py-1 rounded mt-5 hover-login-btn'>Teachers Signup</button>
                    </form>
                    <div className='my-5 flex items-center justify-between'>
                        <hr className='w-[40%]'/>
                        <p className='text-slate-500'>or</p>
                        <hr className='w-[40%]'/>
                    </div>
                    <button className='sign-in-with-style hover-login-btn' ><FaGoogle className='w-4 h-4'></FaGoogle>Create account with Google</button>
                    <button className='sign-in-with-style mt-3 hover-login-btn' ><FaGithub className='w-4 h-4'></FaGithub>Create account with Github</button>
                </div>
                }
                <p className='text-base text-center text-slate-600 mb-2'>Already have an account? Please <Link to="/login" className='text-red-500 underline'>Log in</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Registration;
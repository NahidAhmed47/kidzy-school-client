import React, { useContext, useEffect, useState } from 'react';
import LoginAnimation from '../Shared/LoginAnimation/LoginAnimation';
import { FaGoogle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';
import Swal from 'sweetalert2'

const Registration = () => {
    const [loginMode, setLoginMode] = useState(true);
    const {createUser, updateUser, signInWithGoogle} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const handleForm = (e)=>{
        e.preventDefault();
        setError('')
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photoUrl = form.photo.value;
        let userLevel;
        if(loginMode){
            userLevel = 'student';
        }else{
            userLevel = 'teacher';
        }
        createUser(email, password)
        .then(result => {
            updateUser(name, photoUrl)
            .then(() => {
                Swal.fire({
                    icon: 'success',
                    title: 'Sign up success!',
                    showConfirmButton: false,
                    timer: 1500
                  })
                    fetch('http://localhost:5000/users-role',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name,
                            email,
                            role: "user",
                            level: userLevel
                        })
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
                  navigate('/',{replace: true})
                form.reset()
            })
            .catch(err => {
                setError(err.message)
            })
        })
        .catch(err => {
            setError(err.message)
        })
    }
    // google sign in
    const googleSignIn = ()=>{
        let userLevel;
        if(loginMode){
            userLevel = 'student';
        }else{
            userLevel = 'teacher';
        }
        signInWithGoogle()
        .then(result =>{
            Swal.fire({
                icon: 'success',
                title: 'Sign up success!',
                showConfirmButton: false,
                timer: 1500
              })
              fetch('http://localhost:5000/users-role',{
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            name: result.user.displayName,
                            email: result.user.email,
                            role: "user",
                            level: userLevel
                        })
                    })
                    .then(res => res.json())
                    .then(data => console.log(data))
              navigate('/',{replace: true})
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
            <p className='text-red-500 text-center mb-5'>{error}</p>
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
                    <button className='sign-in-with-style hover-login-btn' onClick={googleSignIn}><FaGoogle className='w-4 h-4'></FaGoogle>Create account with Google</button>
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
                    <button className='sign-in-with-style hover-login-btn' onClick={googleSignIn}><FaGoogle className='w-4 h-4'></FaGoogle>Create account with Google</button>
                </div>
                }
                <p className='text-base text-center text-slate-600 mb-2'>Already have an account? Please <Link to="/login" className='text-red-500 underline'>Log in</Link></p>
            </div>
        </div>
    </div>
    );
};

export default Registration;
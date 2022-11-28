import React, { useState } from 'react'
import {useNavigate}   from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";





const SignIn = () => {
    const auth = getAuth();
    const navigation=useNavigate()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');



    return (
        <div className='mainContainer'>
            <div className='SignInContainer'>
                <h1>SIGN IN</h1>
                <input placeholder='Enter Email Address ' onChange={e=>setEmail(e.target.value)} type={'email'} />
                <input placeholder='Enter Password ' type={'password'} onChange={e=>setPassword(e.target.value)}  />
                <button className='signInBtn'  >  Sign In </button>
                <a className='link'  onClick={()=>navigation('/SignUp')}>Are You New ?SignUp</a>
            </div>

        </div>
    )
}

export default SignIn
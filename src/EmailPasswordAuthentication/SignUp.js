import React, { useState } from 'react'
import './auth.css';
import {useNavigate}   from 'react-router-dom';

const SignUp = () => {
const navigation=useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')





    return (
        <div className='mainContainer'>
            <div className='SignUpContainer'>
                <h1>SIGN UP</h1>
                <input placeholder='Enter Email Address ' onChange={e=>setEmail(e.target.value)}  type={'email'} />
                <input placeholder='Enter Password ' onChange={e=>setPassword(e.target.value)} type={'password'} />
                <button  className='signUpBtn' >  Sign Up </button>
                <a className='link' onClick={()=>navigation('/SignIn')}  > already account ? SignIn</a>
            </div>

        </div >
    )
}

export default SignUp
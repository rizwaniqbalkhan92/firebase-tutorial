import React, { useState } from 'react'
import {useNavigate}   from 'react-router-dom';
import {  signInWithEmailAndPassword } from "firebase/auth";

import {auth}  from './firebaseConfig';



const SignIn = () => {

    const navigation=useNavigate()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
function signIn(){
   


    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        alert('Sign In Successfully...!!')
        const user = userCredential.user;
        console.log(user)
        navigation('/Dashboard')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
      

        const errorMessage = error.message;
        alert(errorMessage);  
    });
}

    return (
        <div className='mainContainer'>
            <div className='SignInContainer'>
                <h1>SIGN IN</h1>
                <input placeholder='Enter Email Address ' onChange={e=>setEmail(e.target.value)} type={'email'} />
                <input placeholder='Enter Password ' type={'password'} onChange={e=>setPassword(e.target.value)}  />
                <button className='signInBtn'  onClick={signIn}>  Sign In </button>
                <a className='link'  onClick={()=>navigation('/SignUp')}>Are You New ?SignUp</a>
            </div>

        </div>
    )
}

export default SignIn
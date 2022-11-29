import React, { useState } from 'react'
import './auth.css';
import {useNavigate}   from 'react-router-dom';
import {  createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebaseConfig'
const SignUp = () => {
const navigation=useNavigate()
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

function createAccount(){

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        alert('User Created Successfully...!!')
        console.log(user);
        navigation('/SignIn');
        // ...
    })
    .catch((error) => {
        const errorCode = error.code;
        alert('Signup Failed...!!')
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
    
}




    return (
        <div className='mainContainer'>
            <div className='SignUpContainer'>
                <h1>SIGN UP</h1>
                <input placeholder='Enter Email Address ' onChange={e=>setEmail(e.target.value)}  type={'email'} />
                <input placeholder='Enter Password ' onChange={e=>setPassword(e.target.value)} type={'password'} />
                <button  className='signUpBtn'  onClick={createAccount}>  Sign Up </button>
                <a className='link' onClick={()=>navigation('/SignIn')}  > already account ? SignIn</a>
            </div>

        </div >
    )
}

export default SignUp
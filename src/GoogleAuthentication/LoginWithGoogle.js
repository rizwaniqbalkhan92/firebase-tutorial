import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from '../EmailPasswordAuthentication/firebaseConfig';

const LoginWithGoogle = () => {

    const provider = new GoogleAuthProvider();
    const navigation = useNavigate()
    const [userData,setUserData]=useState({
        name:'',
        uid:'',
        photo:'',
        email:''
    })

    function googleAuthentication() {


        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                alert('User Login Successfully..>!!')
                const user = result.user;
                console.log(token)
                console.log(user)
                setUserData({
                    name:user.displayName,
                    photo:user.photoURL,
                    uid:user.uid,
                    email:user.email
                })
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                alert('error', errorMessage);
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
    }

    return (
        <div>
            <h1>GOOGLE AUTHENTICATION</h1>
            <button style={{ width: 400, height: 60, backgroundColor: 'blue', color: '#FFF', fontSize: 30 }} onClick={googleAuthentication}>LOGIN WITH GOOGLE</button>
            <img  src={userData?.photo} style={{width:300,height:300,borderRadius:10}} />
            <h1>NAME: {userData?.name}</h1>
            <h1>EMAIL: {userData?.email}</h1>
            <h1>UID: {userData?.uid}</h1>
        </div>
    )
}

export default LoginWithGoogle
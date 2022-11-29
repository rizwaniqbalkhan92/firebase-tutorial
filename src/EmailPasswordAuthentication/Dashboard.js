import React from 'react'
import {signOut } from "firebase/auth";
import {auth}  from './firebaseConfig'
import {useNavigate,useLocation,useParams}   from 'react-router-dom';

const Dashboard = () => {
const location=useLocation();
const location2=useParams();
console.log('state',location2)
  const navigation=useNavigate()

function Signout(){
  signOut(auth).then(() => {
    // Sign-out successful.
  alert('Logout Successfuly..>!!')
    navigation('/SignIn');

  }).catch((error) => {
    // An error happened.
    alert('error',error)
  });

}

  return (
    <div>
      <h1>DASHBOARD</h1>


      
<button onClick={Signout}>LOGOUT</button>
 
 
    </div>
  )
}

export default Dashboard
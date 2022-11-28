import React from 'react'
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Dashboard = () => {
  const auth = getAuth();

  function logout(){

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user);
        // ...
      } else {
        // User is signed out
        // ...
        alert('logout')

      }
    });


  }


  return (
    <div>
      <h1>DASHBOARD</h1>
      <button onClick={logout} >LOGOUT</button>
    </div>
  )
}

export default Dashboard
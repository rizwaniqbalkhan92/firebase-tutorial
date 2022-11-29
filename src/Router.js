import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import SignUp from "./EmailPasswordAuthentication/SignUp";
import SignIn from './EmailPasswordAuthentication/SignIn';
import DashboardComp from "./EmailPasswordAuthentication/Dashboard";
import LoginWithGoogle from "./GoogleAuthentication/LoginWithGoogle";



export default function BasicExample() {
  return (
    <Router>

      <Routes>
        <Route exact path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route exact path="/SignIn" element={<SignIn/>}/>
      </Routes>
      <Routes>
        <Route exact path="/SignUp" element={<SignUp/>}/>
      </Routes>
      <Routes>
        <Route exact path="/Dashboard" element={<DashboardComp/>}/>
     
      </Routes>
      <Routes>
        <Route exact path="/LoginWithGoogle" element={<LoginWithGoogle/>}/>
     
      </Routes>

  </Router>
  );
}



function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}


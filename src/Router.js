import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import SignIn from "./Firebase/SignIn";
import SignUp from "./Firebase/SignUp";
import DashboardComp  from './Firebase/Dashboard';


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

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

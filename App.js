import { useState, useEffect } from "react";
import "./App.css";
import logo from "./img/scrobit.png";
import {Router ,Route, useNavigate} from "react-router-dom";


function App() {
  const navigate = useNavigate();

    const navigateToDashboard = () => {
      // 👇️ navigate to /contacts
      navigate('/Dashboard');
    };

    const navigateHome = () => {
      // 👇️ navigate to /Home
      navigate('/');
    }
  return (
    // Left side Heading / para -
    <div className="container">
      <div className="para">
        <p className="para-under">API</p>
        <p className="para-under">MONITORING</p>
        <p className="para-under">PROJECT</p>
      </div>

      <div className="para-sec">
        <p>Powered By</p>
      </div>

      {/* Logo of scrobits */}
      <div className="picture">
        <img src={logo} className="logo" alt />
      </div>

      {/* Admin Login form  */}
      <div class="center">
        <form method="post">
          {/* Login heading */}
          <h1>LOGIN</h1>
          {/* First text box (username) */}
          <div class="txt_field">
            <input type="text" required></input>
            <span>
              
            </span>
            <label>username</label>
          </div>

          {/* Second text box (Password) */}
          <div class="txt_field">
            <input type="password" required></input>
            <span>

            </span>
            <label>password</label>
            
          </div>
          <br></br>
          
          {/* Login Button */}
          <div className="btn-divv">
            <button onClick={navigateToDashboard} className="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import '../components/style/login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [action, setAction] = useState("Login");

  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3003/login', {
        email: loginEmail,
        password: loginPassword
      });
         //console.log(res);
      console.log(res.data.name)
      if (res.data==="exist") {
        alert(`Login Successful as ${loginEmail}`);
        // cookie.set('user',)

      } else if(res.data==="invalid Bad request"){
        alert(`Invalid email or password`);
      }
      else{
        alert("filled missing ")
      }
    } catch (err) {
      console.log(err);
      alert('An error occurred');
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('http://localhost:3003/login/signup', {
        name: signupName,
        email: signupEmail,
        password: signupPassword
      });
      console.log(res);
      if (res.data === 'exist') {
        alert(`Your data is successfully saved as ${signupName}`);
      } else {
        alert('Already exists');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="parent">
      <div className="login-container">
        <h1>{action}</h1>
        <div className="box">
          <form onSubmit={action === 'Login' ? handleLoginSubmit : handleSignupSubmit}>
            {action === "Signup" && (
              <div className="signup-fields">
                <label>Name </label>
                <input
                  type="text"
                  value={signupName}
                  placeholder="Enter your Name"
                  onChange={(e) => setSignupName(e.target.value)}
                />
              </div>
            )}
            <div className="input-field">
              <label>Email </label>
              <input
                type="email"
                value={action === 'Login' ? loginEmail : signupEmail}
                placeholder="Enter your Email"
                onChange={(e) => action === 'Login' ? setLoginEmail(e.target.value) : setSignupEmail(e.target.value)}
              />
            </div>
            <div className="input-field">
              <label>Password </label>
              <input
                type="password"
                value={action === 'Login' ? loginPassword : signupPassword}
                placeholder="Enter your Password"
                onChange={(e) => action === 'Login' ? setLoginPassword(e.target.value) : setSignupPassword(e.target.value)}
              />
            </div>
            <button type="submit">{action}</button>
            {action === "Login" ? (
              <p>If you don't have an account, go to <Link to="/login/signup" onClick={() => setAction('Signup')}>Signup</Link></p>
            ) : (
              <p>If you already registered, go to <Link to="/login" onClick={() => setAction('Login')}>Login</Link></p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

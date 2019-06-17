import React, { Component } from 'react';
import './adminLogin.css';
import Image from '../image/Image'
import { Link } from 'react-router-dom'
import Nav from '../nav/Nav'

class AdminLogin extends Component {

  loginHandler = () => {
    alert("login clicked");
    this.props.history.push('/wish');

  };

  signUp = () => {
    alert("signup clicked");
    this.props.history.push('/');
  };

  render() {

    return (
      <div className='admin-login-wrapper'>
        <Nav />
        <div className="admin-login-container">
          <div className="login">
            <Link to='/'><Image source='logo' alt="Logo" className='logo-admin' /></Link>
            <h6>Admin Login</h6>
            <div className='inputs'>
              <label>username</label> 
              <input 
                className="form-control-lg border-line"
                id="username" 
                labelName="Username: " 
                inputType="text" 
                parentFunction={this.setUsername} 
              />
              <label>password</label> 
              <input 
                className="form-control-lg border-line"
                type="password" 
                id="password" 
                labelName="Password: " 
                inputType="password" 
                parentFunction={this.setPassword} 
              />
            </div>
            <div className="buttonContainer">
              <button className="btn btn-primary" onClick={this.loginHandler}>Login</button> &nbsp;
              <button className="btn btn-info" onClick={this.signUp}>Sign Up</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminLogin;
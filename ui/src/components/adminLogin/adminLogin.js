import React, {Component} from 'react';
import {Router, Route} from  'react-router-dom';
import './adminLogin.css';
import logo from '../image/MAWLogo.png';





class AdminLogin extends Component {


  loginHandler = () => {
    alert("login clicked");
    this.props.history.push('/');

  };

  signUp = () => {
    alert("signup clicked");
    this.props.history.push('/wish');
  };

    render() {



      return (
       <div className="container">
         <img src={logo} alt="Logo" />

        <h6>Admin Login</h6>
        <div className="login">
          <div>  <label>username</label> <input id ="username" labelName="Username: " inputType="text" parentFunction={this.setUsername}  /></div>
          <div> <label>password</label><input id ="password" labelName="Password: " inputType="password" parentFunction={this.setPassword} /></div>
       <div>   <button onClick={this.loginHandler}>Login</button>
         <button onClick={this.signUp}>Sign Up</button></div>

        </div>
       </div>

        );
    }
}

export default AdminLogin;
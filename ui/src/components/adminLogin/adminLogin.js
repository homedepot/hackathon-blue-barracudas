import React, { Component } from 'react';
import './adminLogin.css';
import Image from '../image/Image'
import Nav from '../nav/Nav'
import axios from "axios";
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class AdminLogin extends Component {

  constructor(props) {
    super(props);

    this.expressDomain =
        process.env.REACT_APP_expressDomain || 'http://localhost:3002';

    this.props = props;
    this.state = {
      username: '',
      password: ''
    }
  }

  login = async () => {
    console.log('login method');
    const { username, password } = this.state;

    try {
      const response = await axios
          .create({ withCredentials: true })
          .post(`${this.expressDomain}/auth/login`, {
            username,
            password
          });
      console.log('response: ', response.data);
      if(response.data.login == 'Successful') {
        cookies.set('user', response.data.user, { path: '/' });
        this.props.history.push('/manage-wishes')
      } else {
        alert("Login unsuccessful")
      }
    } catch (e) {
      console.log('error', e);
      alert("Error logging in!")
    }
  };

  // signUp = async () => {
  //   const { username, password } = this.state;
  //
  //   try {
  //     await axios
  //         .post(`${this.expressDomain}/auth/register`, {
  //           username,
  //           password
  //         });
  //     this.setState({
  //       username: '',
  //       password: ''
  //     })
  //   } catch (e) {}
  // };

  handleFormFieldChange = (key, { target: { value } }) => {
    this.setState({ [key]: value })
  };

  render() {

    return (
      <div className='admin-login-wrapper'>
        <Nav navButtons="false" />
        <div className="admin-login-container">
          <div className="login">
            <Image source='logo' alt="Logo" className='logo-admin' />
            <h6>Admin Login</h6>
            <div className='inputs'>
              <label>username</label> 
              <input 
                className="form-control-lg border-line"
                id="username"
                labelName="Username: " 
                inputType="text"
                onChange={event =>
                    this.handleFormFieldChange('username', event)
                }
              />
              <label>password</label> 
              <input 
                className="form-control-lg border-line"
                type="password" 
                id="password" 
                labelName="Password: " 
                inputType="password"
                onChange={event =>
                    this.handleFormFieldChange('password', event)
                }
              />
            </div>
            <div className="buttonContainer">
              <button className="btn btn-primary" onClick={this.login}>Login</button> &nbsp;
              {/*<button className="btn btn-info" onClick={this.signUp}>Sign Up</button>*/}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default AdminLogin;
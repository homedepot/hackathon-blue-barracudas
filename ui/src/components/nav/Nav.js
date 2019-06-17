import { withRouter } from 'react-router-dom';
import React, { Component } from 'react'
import Image from '../image/Image'
import { Link } from 'react-router-dom'
import './Nav.scss'
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Nav extends Component{

  constructor(props) {
    super(props);
    console.log('Nav props: ', props);
  }

  showNavButtons = () => this.props.navButtons !== "false";
  userLoggedIn = () => !!cookies.get('user');

  logOut = (e) => {
    e.preventDefault();
    cookies.remove('user');
    this.props.history.push('/admin');
  }

  renderLinks = () =>
    this.userLoggedIn()
      ? (
        <div>
          Welcome { cookies.get('user') } |
          <div
            onClick={this.logOut}
            style={{ cursor: 'pointer' }}
          >Logout</div>
        </div>
      )
      : (
        <div>
          <Link to='/childsignup'>Make Your Wish</Link> |
          <Link to='/admin'>Admin</Link>
        </div>
      );

  render(){
    return(
      <div className='nav-container'>
        <div className='logos'>
          <Link to='/'>
            <Image 
              source='logo' 
              className='logo'
            />
          </Link>
          <Link to='/'>
            <Image 
              source='logoGalaxy'
              className='logoGalaxy'
            />
          </Link>
        </div>
          { this.showNavButtons()
            ? this.renderLinks()
            : ""
          }
      </div>
    )
  }
}

export default withRouter(Nav);
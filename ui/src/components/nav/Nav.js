import React, { Component } from 'react'
import Image from '../image/Image'
import { Link } from 'react-router-dom'
import './Nav.scss'

class Nav extends Component{

  constructor(props) {
    super(props);
    this.props = props;
    console.log('Nav props: ', props);
  }

  state = {
    isLoggedIn: false,
  }

  showNavButtons = () => {
    return this.props.navButtons !== "false";
  }

  renderLinks = () => {
    if (this.state.isLoggedIn){
      return (
        <div>
          <div>Your Name</div>
          <Link to='/logout'>Logout</Link>
        </div>
      )
    } else {
      return (
        <div>
        <Link to='/childsignup'>Make Your Wish</Link>
         |
        <Link to='/admin'>Admin</Link>
      </div>
      )
    }
  }
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

export default Nav;
import React, { Component } from 'react'
import Image from '../image/Image'
import { Link } from 'react-router-dom'
import './Nav.scss'
export default class Nav extends Component{
  state = {
    isLoggedIn: false,
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
          {this.renderLinks()}
      </div>
    )
  }
}
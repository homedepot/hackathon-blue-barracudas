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
          <Link to='/'>Your Name</Link>
          <Link to='/'>Logout</Link>
        </div>
      )
    } else {
      return (
        <div>
        <Link to='/'>Make Your Wish</Link>
         |
        <Link to='/'>Admin</Link>
      </div>
      )
    }
  }
  render(){
    return(
      <div className='nav-container'>
        <div className='logos'>
          <Image 
            source='logo' 
            className='logo'
          />
          <Image 
            source='logoGalaxy'
            className='logoGalaxy'
          />
        </div>
          {this.renderLinks()}
      </div>
    )
  }
}
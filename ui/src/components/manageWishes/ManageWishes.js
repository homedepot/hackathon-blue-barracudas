import WishList from '../wishList/WishList'
import React, { Component } from 'react'
import './ManageWishes.scss'
export default class ManageWishes extends Component{
  render(){
    return(
      <div className='manage-wishes-container'>
        <div className='all-wishes-container'>
          <WishList/>
        </div>
      </div>
    )
  }
}
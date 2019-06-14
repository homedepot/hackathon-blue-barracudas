import React, { Component } from 'react'
import './Wish.scss'
import Image from '../image/Image'

export default class Wish extends Component {
  render(){
    return(
      <div className='wish-container'>
        <div className='test'>
          Test
        </div>
        <Image
            className="clear-button"
            alt="Clear search"
            source="toGo"
          />       
      </div>
    )
  }
}
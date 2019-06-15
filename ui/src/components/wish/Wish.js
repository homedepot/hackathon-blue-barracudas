import React, { Component } from 'react'
import './Wish.scss'
import Image from '../image/Image'

export default class Wish extends Component {
  render(){
    return(
      <div className='wish-container'>
        <div className='child-information'>
          <div>
            <img src='https://i.imgur.com/AqQrCXI.jpg?1'/>
          </div>
          <div className='child-info-container'>
            <div>
              <span>Child's Name</span> - Age Child's Age from Child's Town
            </div>
            <div>
              This child is great! He would like to learn TaeKwonDo
            </div>
          </div>
        </div>

        <div className='wish-information'>
          <div className='sponsor'>
            <Image source='hd-logo'/>
          </div>
          <div className='wish-type card'>
            <Image
              source='toBe'
            />
          </div>
          <div className='chevron'>
            <Image
              source='chevronForward'
            />
          </div>
        </div>
      </div>
    )
  }
}
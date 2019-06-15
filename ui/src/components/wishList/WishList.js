import React, { Component } from 'react'
import Wish from '../wish/Wish'
import Image from '../image/Image'
import Nav from '../nav/Nav'
import './WishList.scss'

export default class WishList extends Component{
  renderImage = () =>{
    return true ? 'magentaMonth' : 'blueMonth'
  }
  renderWishList = () => {
    return this.props.wishes.map((child, index)=>{
      return(
        <div 
            className='wish-item-wrapper'             
            key={index} 
        >
        <div className='calender-image'>
          <Image source={this.renderImage()}/>
        </div>
        <div className='list-group-item list-group-item-container'>
          <Wish
            childImage={'https://i.imgur.com/AqQrCXI.jpg?1'}
            childName={'Lark'}
            childAge={3}
            childDetails={'Lark loves fun!'}
            childTown={'Ancorage'}
            sponsor={'https://i.imgur.com/tKtG0lp.jpg'}
            wishType={'toGo'}
          />
        </div>
        </div>
      )
    })
  }
  render(){
    return(
      <div className='wish-management-container'>
        <Nav />
        <div className='wishes-group-container list-group'>
          {this.renderWishList()}
        </div>
      </div>
    )
  }
}
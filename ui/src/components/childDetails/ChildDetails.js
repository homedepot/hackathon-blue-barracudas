import Nav from '../nav/Nav'
import React, { Component } from 'react'
import './ChildDetails.scss'
import Image from '../image/Image'

import { connect } from 'react-redux';
class ChildDetails extends Component{
  randomChild = () => {
    const children = [
      "pink-child",
      "white-child",
      "yellow-child",
      "blue-child",
      "black-child",
      "green-child",
    ]
    return children[Math.floor(Math.random()*children.length)]
  }

  wishType = () => {
    if(this.props.wishType === 'toBe'){
      return 'to be who I want!'
    }else if(this.props.wishType === 'toGo'){
      return 'to go to my favorite place!'
    }else if(this.props.wishType === 'toSee'){
      return 'to see the coolest thing!'
    }else{
      return 'to meet my hero!'
    }
  }
  render(){
    const { childFirstName, childHomeCity, wishDetailsText } = this.props.childInfo 
    
    return(
      <div className='child-details-container'>
        <Nav />
        <div className='child-info-container'>
          <Image source={this.randomChild()}/>
          <div className='wish-details'>
            Hi! My name is {childFirstName}. {wishDetailsText} I am from {childHomeCity}. My wish came true when <Image source='logo' className='wish-logo'/> helped me {this.wishType()}
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    childInfo: state.wish.childInfo,
  }
}


export default connect(
  mapStateToProps, 
  null
)(ChildDetails)
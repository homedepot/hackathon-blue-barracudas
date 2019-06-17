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
    ];
    return children[Math.floor(Math.random()*children.length)]
  };

  wishType = () => {
    switch(this.props.childInfo.wishType) {
      case 'Go Somewhere':  return('to go to my favorite place!');
      case 'Meet Someone':  return('to meet my hero!');
      case 'Be Someone':    return('to be who I want!');
      case 'See Something': return('to see the coolest thing!');
    };
  };

  wishDetails = () => {
    console.log('props is set to : ', this.props);
    const wishDetailsText = this.props.childInfo.wishDetailsText;
    return wishDetailsText.charAt(0).toLowerCase()
            + wishDetailsText.substring(1, wishDetailsText.length);
  }


  render(){
    const { childFirstName, childHomeCity } = this.props.childInfo;
    
    return(
      <div className='child-details-container'>
        <Nav />
        <div className='child-info-container'>
          <Image source={this.randomChild()}/>
          <div className='wish-details'>
            <p>Hi! My name is {childFirstName}. My wish is to {this.wishDetails()}.</p>
            <p>I am from {childHomeCity}.</p>
            <p>My wish came true when <Image source='logo' className='wish-logo'/>
              helped me {this.wishType()}</p>
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
};

export default connect(
  mapStateToProps, 
  null
)(ChildDetails)
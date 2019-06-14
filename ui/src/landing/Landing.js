import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Landing.scss'
export default class Landing extends Component {

  state = {
    windowHeight: window.innerHeight,
    windowWidth: window.innerWidth
  }
  
            
  // function Prep(){
     
  //     image_Element = document.getElementById("image");
  //     image_Height = image_Element.clientHeight;
  //     image_Width = image_Element.clientWidth;
      
  //     availSpace_V = window_Height - image_Height;
  //     availSpace_H = window_Width - image_Width;
      
  //     var changeInterval = 3000; // Time has to be in miliseconds. So, 3000 is 3 seconds
  //     setInterval(moveImage, changeInterval);
  // }
  
  // function moveImage(){
  //     var randNum_V = Math.round(Math.random() * availSpace_V);
  //     var randNum_H = 
      
  //     image_Element.style.top = randNum_V + "px";
  //     image_Element.style.left = randNum_H + "px";
  // }

  getAvailableSpace = (windowSize, imageSize) => {
    const availableSpace = windowSize - imageSize
    return availableSpace
  }

  setPosition = (windowSize, imageSize) => {
    const result = Math.round(Math.random() * this.getAvailableSpace(windowSize, imageSize))
    return result
  }

  render() {
    return (
      <div className='landing-page-container'>
        <Link to="/childsignup"><h1>Go to child sign up page</h1></Link>
        <div className='one' style={{top: `${this.setPosition(this.state.windowHeight, 200)}`, left: `${this.setPosition(this.state.windowWidth, 200)}`}}>1yayayayay</div>
        <div className='two' style={{top: `${this.setPosition(this.state.windowHeight, 200)}`, left: `${this.setPosition(this.state.windowWidth, 200)}`}}>2</div>
        <div className='three' style={{top: `${this.setPosition(this.state.windowHeight, 200)}`, left: `${this.setPosition(this.state.windowWidth, 200)}`}}>3</div>
        <div className='four' style={{top: `${this.setPosition(this.state.windowHeight, 200)}`, left: `${this.setPosition(this.state.windowWidth, 200)}`}}>4</div>
        <div className='five' style={{top: `${this.setPosition(this.state.windowHeight, 200)}`, left: `${this.setPosition(this.state.windowWidth, 200)}`}}>5</div>
        <div className='six' style={{top: `${this.setPosition(this.state.windowHeight, 200)}`, left: `${this.setPosition(this.state.windowWidth, 200)}`}}>6</div>
      </div>
    )
  }
}

import Nav from '../nav/Nav'
import React, { Component } from 'react'
import './ConfirmationPage.scss'
import { connect } from 'react-redux';
import Image from '../image/Image'

class ConfimrationPage extends Component{
  render(){
    return(
      <div className='confirmation-page-container'>
        <Nav />
        <div className='small-container'>Great job <h2>{this.props.childInfo.name}</h2>!</div>
        <div className='small-container'>You've submitted a wish! </div>
        <Image source={this.props.wishType} className='wish-type-image' />
        <div className='small-container'> 
          <Image source='logo' className='make-a-wish'/>
          <div>is reading your wish!</div>
         </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wishType: state.wish.wishType,
    childInfo: state.wish.childInfo
  }
}


export default connect(
  mapStateToProps, 
  null
)(ConfimrationPage)
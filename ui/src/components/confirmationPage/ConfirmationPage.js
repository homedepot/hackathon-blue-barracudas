import WishList from '../wishList/WishList'
import Nav from '../nav/Nav'
import React, { Component } from 'react'
import { getAllWishes } from '../../actions/wishActions'
import './ConfirmationPage.scss'
import { connect } from 'react-redux';
import Image from '../image/Image'

class ConfimrationPage extends Component{
  render(){
    return(
      <div className='confirmation-page-container'>
        <div>
          <div>Great job <h2>{this.props.childInfo.name}</h2>!</div>
          <div>You've submitted a wish! </div>
          <Image src={this.props.wishType} />
          <div>The Make*A*Wish Team is reading your wish!</div>
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
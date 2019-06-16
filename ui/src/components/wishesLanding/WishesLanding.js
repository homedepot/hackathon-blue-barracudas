import React, { Component } from 'react'
import Image from '../image/Image'
import Nav from '../nav/Nav'
import './WishesLanding.scss'
import { connect } from 'react-redux'
import { getAllWishes } from '../../actions/wishActions'

class WishList extends Component{
  componentDidMount(){
    this.props.getAllWishes()
  }

  randomStar = () => {
    const stars = [
      "pink-star",
      "white-star",
      "yellow-star",
      "blue-star",
      "black-star",
      "green-star",
    ]
    return stars[Math.floor(Math.random()*stars.length)]
  }
  renderWishList = () => {
    return this.props.wishes.map((wish, index)=>{
      return(
        <div 
            className='public-wishes-wrapper'             
            key={index} 
        >
          <Image source={this.randomStar()} className={`random-star ${this.randomStar()}`}/>
          <div>
            <h1>{wish.childFirstName},</h1>
            <h2>{wish.childAge}</h2>
          </div>
        </div>
      )
    })
  }
  render(){
    return(
      <div className='wishes-landing-container'>
        <Nav />
        <div className='wishes-granted-header'>
          {this.props.wishes.length} Wishes Granted! Thousands more to come!
        </div>
        <div className='wishes-group-container'>
          {this.renderWishList()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    wishes: state.wish.wishes
  }
}

export default connect(
  mapStateToProps,
  {
    getAllWishes
  }
)(WishList)
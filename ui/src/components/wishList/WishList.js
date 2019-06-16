import React, { Component } from 'react'
import Wish from '../wish/Wish'
import Image from '../image/Image'
import './WishList.scss'
import { connect } from 'react-redux'

class WishList extends Component{
  renderImage = () =>{
    return this.props.isCurrentDate ? 'magentaMonth' : 'blueMonth'
  }
  dateColor = () => {
    return this.props.isCurrentDate ? 'magenta' : 'blue'
  }
  renderWishList = () => {
    return this.props.wishes.map((wish, index)=>{
      return(
        <div 
            className='wish-item-wrapper'             
            key={index} 
        >
        <div className='calender-image'>
          <Image source={this.renderImage()} className='calendar'/>
          <div class={`date ${this.dateColor()}`}>{wish.dateUpdated}</div>
        </div>
        <div className='list-group-item list-group-item-container'>
          <Wish
            childImage={wish.childImage}
            childName={wish.childName}
            childAge={wish.childAge}
            childDetails={wish.childDetails}
            childTown={wish.childTown}
            sponsor={wish.sponsor}
            wishType={wish.wishType}
          />
        </div>
        </div>
      )
    })
  }
  render(){
    return(
      <div className='wishes-container'>
        <div className='wishes-group-container list-group'>
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
  null
)(WishList)
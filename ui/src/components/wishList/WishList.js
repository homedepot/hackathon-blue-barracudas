import React, { Component } from 'react'
import Wish from '../wish/Wish'
import Image from '../image/Image'
import './WishList.scss'
import { connect } from 'react-redux'
import moment from 'moment'
import { checkOffWish, addSponsor } from '../../actions/wishActions'

class WishList extends Component{
  isCurrentDate = (date) => {
    const recordDate = moment(date).date()
    const currentDate = moment().date()
    return moment(recordDate).isSame(moment(currentDate))
  }
  renderImage = (date) =>{
    return this.isCurrentDate(date) ? 'magentaMonth' : 'blueMonth'
  }
  dateColor = (date) => {
    return this.isCurrentDate(date) ? 'magenta' : 'blue'
  }

  renderDayOrCheck = (wish) => {
    if(wish.status === 'Complete'){
     return <Image source='check' className='date check-size'/>
    }else {
     return <div className={`date ${this.dateColor(wish.updatedAt)}`}>{moment(wish.updatedAt).date()}</div>
    }
  }

  renderWishList = () => {
    return this.props.wishes.map((wish, index)=>{
      return(
        <div 
            className='wish-item-wrapper'             
            key={index} 
        >
        <div className='calender-image'>
          <Image source={this.renderImage(wish.updatedAt)} className='calendar' onClick={this.props.checkOffWish(wish.id)}/>
          {this.renderDayOrCheck(wish)}
        </div>
        <div className='list-group-item list-group-item-container'>
          <Wish
            childImage={wish.childImage}
            childFirstName={wish.childFirstName}
            childAge={wish.childAge}
            wishDetailsText={wish.wishDetailsText}
            childHomeCity={wish.childHomeCity}
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
  {
    checkOffWish,
    addSponsor
  }
)(WishList)
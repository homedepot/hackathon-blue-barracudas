import WishList from '../wishList/WishList'
import Nav from '../nav/Nav'
import React, { Component } from 'react'
import { getAllWishes } from '../../actions/wishActions'
import './ManageWishes.scss'
import { connect } from 'react-redux';
class ManageWishes extends Component{
  componentDidMount(){
    this.props.getAllWishes()
  }

  render(){
    return(
      <div className='manage-wishes-container'>
        <Nav />
        <div className='all-wishes-container'>
          <WishList/>
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
)(ManageWishes)
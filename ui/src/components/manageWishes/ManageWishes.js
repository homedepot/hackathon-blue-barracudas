import WishList from '../wishList/WishList'
import Nav from '../nav/Nav'
import React, { Component } from 'react'
import { getAllWishes } from '../../actions/wishActions'
import './ManageWishes.scss'
import { connect } from 'react-redux';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

class ManageWishes extends Component{

  constructor(props) {
    super(props);
    if (!cookies.get('user')) this.props.history.push('/admin');
  }

  componentDidMount(){
    this.props.getAllWishes();
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
};

export default connect(
  mapStateToProps, 
  {
    getAllWishes
  }
)(ManageWishes)
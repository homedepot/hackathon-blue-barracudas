import React, { Component } from 'react';
import './Wish.scss';
import Image from '../image/Image';

export default class Wish extends Component {
  state = {
    sponsorName: ''
  }

  handleChange = (event) => {
    console.log(this.state.sponsorName)
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }

  showDropDown = (wishId) => {
    this.state.showDropDown ? this.setState({showDropDown: false}) : this.setState({showDropDown: true})
  }

  addSponsor = (wishId, sponsor) => {
    this.state.showDropDown ? this.setState({showDropDown: false}) : this.setState({showDropDown: true})
    this.props.addSponsor(wishId, sponsor)
  }

  render() {
    return (
      <div className='wish-container'>
        <div className='profile-picture'>
          <img className='rounded-image' alt='Child' src={this.props.childImage} />
        </div>
        <div className='child-wish-details-container'>
          <p className='lead gray-text'><span>{this.props.childFirstName}</span> - Age {this.props.childAge} from {this.props.childHomeCity}</p>
          <p className='child-wish-details'>{this.props.wishDetailsText}</p>    
        </div>
        <div className='vertical-line'></div>    
        <div className='wish information'>


             <div className='sponsor'>

               <div className='sponsorName'>Sponsor:</div>
               { Math.random() >= 0.5
                 ? ( <img alt='Home Depot Logo' src="https://corporate.homedepot.com/sites/default/files/image_gallery/THD_logo.jpg" /> )
                 : ( <img alt='Bank of America Logo' src="https://cdn.worldvectorlogo.com/logos/bank-of-america-4.svg" /> )
               }
             </div>
             <div className='vertical-line'></div>
             <div className='wish-type icons'>
               <Image
                 source='chevronForward'
               />
             </div>
             {/*<div className='chevron icons'>*/}
             {/*  <Image*/}
             {/*    source='chevronForward'*/}
             {/*  />*/}
             {/*</div>*/}
           </div>
      </div>
    )
  }
}
import React, { Component } from 'react'
import './Wish.scss'
import Image from '../image/Image'

export default class Wish extends Component {
  renderSponsor = () => {
    if(this.props.sponor === '' || !this.props.sponsor){
      return (
      <div className='sponsor-items' onClick={this.props.addSponsor}>
        <Image source='add'/>
        <label>Add Sponsor</label>
      </div>
      )
    } else{
      return (<img alt='Sponsor' src={`${this.props.sponsor}`} />)
    }
  }
  render() {
    return (
      <div className='wish-container'>
        <div className='profile-picture'>
          <img className='rounded-image' alt='Profile picture' src={this.props.childImage} />
        </div>
        <div className='child-wish-details-container'>
          <p className='lead gray-text'><span>{this.props.childFirstName}</span> - Age {this.props.childAge} from {this.props.childHomeCity}</p>
          <p className='child-wish-details'>{this.props.wishDetailsText}</p>    
        </div>
        <div className='vertical-line'></div>    
        <div className='wish information'>
             <div className='sponsor'>
               {this.renderSponsor()}
             </div>
             <div className='vertical-line'></div>
             <div className='wish-type icons'>
               <Image
                 alt='Wish type'
                 source={this.props.wishType}
               />
             </div>
             <div className='chevron icons'>
               <Image
                 alt='Chevron'
                 source='chevronForward'
               />
             </div>
           </div>
      </div>
    )
  }
}
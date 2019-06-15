import React, { Component } from 'react'
import './Wish.scss'
import Image from '../image/Image'

export default class Wish extends Component {
  render() {
    return (
      <div className='wish-container'>
        <div className='child information card'>
          <div className='profile-picture'>
            <img alt='Profile picture' src={this.props.childImage} />
          </div>
          <div className='child-info-container'>
            <div className='child-name'>
              <h3>{this.props.childName}</h3> - Age {this.props.childAge} from {this.props.childTown}
            </div>
            <div className='child-details'>
              {this.props.childDetails}
            </div>
          </div>
          <div className='vertical-line'></div>
          <div className='wish information'>
            <div className='sponsor'>
              <img alt='Sponsor' src={`${this.props.sponsor}`} />
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
      </div>
    )
  }
}
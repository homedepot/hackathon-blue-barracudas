import React, { Component } from 'react'
import './Wish.scss'
import Image from '../image/Image'

export default class Wish extends Component {
  state = {
    showDropDown: false,
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

  sponsorDropDown = () => {
    if(this.state.showDropDown){
    return(
      <div >
        <li className="nav-item dropdown show">
          <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Add Sponsor</a>
          <div className="dropdown-menu show other-options" x-placement="bottom-start" >
            <input 
              type="text" 
              name="sponsorName" 
              placeholder="Enter Sponsor Name" 
              onChange={this.handleChange}
              className='dropdown-item sponsor-name form-control-sm' 
            />
            <button type="button" onClick={() => this.addSponsor(this.props.id, this.state.sponsorName)} className="btn btn-info dropdown-item">Submit</button>
            <div className="dropdown-divider"></div>
          </div>
        </li>
      </div>
    )} else{
      return <label>Add Sponsor</label>
    }
  }
  renderSponsor = () => {
    if(this.props.sponor === '' || !this.props.sponsor){
      return (
      <div className='sponsor-items'>
        <Image source='add' onClick={() => this.showDropDown()}/>
        {this.sponsorDropDown()}
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
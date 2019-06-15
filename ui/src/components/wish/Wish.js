import React, { Component } from "react"
import "./Wish.scss"
import Image from "../image/Image"

export default class Wish extends Component {

  render() {
    return (
      <div className="jumbotron wish-container">
        <div className="profile-picture">
          <img alt="Profile picture" src={this.props.childImage} />
        </div>
        <p className="lead"><h3>{this.props.childName}</h3> - Age {this.props.childAge} from {this.props.childTown}</p>
        <p className="child-details">{this.props.childDetails}</p>    
        <div className="vertical-line"></div>    
        <div className="wish information">
             <div className="sponsor">
               <img alt="Sponsor" src={`${this.props.sponsor}`} />
             </div>
             <div className="vertical-line"></div>
             <div className="wish-type icons">
               <Image
                 alt="Wish type"
                 source={this.props.wishType}
               />
             </div>
             <div className="chevron icons">
               <Image
                 alt="Chevron"
                 source="chevronForward"
               />
             </div>
           </div>
      </div>
    )
  }
}
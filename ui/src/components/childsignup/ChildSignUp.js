import React, { Component } from 'react'
import Image from '../image/Image'
import './ChildSignUp.css'
import { connect } from 'react-redux'
import { setWishType, createNewWish, setChildInfo } from '../../actions/wishActions'
import Nav from '../nav/Nav'

const Wish = (props) => {
  return (
    <div onClick={() => props.handleClick(props.imgSrc)} className='wish-type-image' style={{ display: 'inline-block', paddingLeft: `${props.leftPadding}px` }}>
      <div
        style={{
          width: 150,
          height: 150,
          backgroundColor: 'white',
          borderColor: '#0870b8',
          borderWidth: 5,
          borderStyle: 'solid',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={`${props.imgSrc}`} />
      </div>
      <h2 className="signup-text">{props.objective}</h2>
      <div className="signup-text">{props.goal}</div>
    </div>
  )
}

class ChildSignUp extends Component {
  state = {
    name: '',
    age: '',
    city: '',
    details: '',
    wish: ''
  }

  handleChange = (event) => {
    console.log(this.state.age)
    event.preventDefault()
    this.setState({[event.target.name]: event.target.value})
  }

  submitNewWish = (wishType) => {
    this.props.setWishType(wishType)
    this.props.createNewWish(this.state)
    this.props.setChildInfo(this.state)
    this.props.history.push('/wish-submitted')
  }

  render() {
    return (
      <div
        className="signup-card"
        style={{ fontFamily: 'Arial Rounded MT Bold' }}
      >
        <Nav />
        <div style={{display: "flex" }}>
          <h1 className="signup-text" style={{ marginTop: 0, fontSize: 80, display: "inline-block" }}>
            Hello, everyone!
          </h1>
        </div>
        <form className='child-signup-form'>
          <div className="signup-text" style={{fontSize: 40}}>
            My name is
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              onChange={this.handleChange}
              style={{height: 80, width: 330, fontSize: 40, color: "#FF00A7"}}
            />
            and I am 
            <input 
              type="text" 
              name="age" 
              placeholder="your age" 
              onChange={this.handleChange}
              style={{height: 80, width: 170, fontSize: 40, color: "#FF00A7"}}
            />
            years old!
            I am from
            <input
              type="text"
              name="city"
              placeholder="enter your city"
              onChange={this.handleChange}
              style={{height: 80, width: 330, fontSize: 40, color: "#FF00A7"}}
            />
          </div>
          <div className='signup-text child-signup-details' style={{fontSize: 40}}>
            <div>
              I <textarea 
                type="text" 
                name="details" 
                placeholder="tell us about you!" 
                style={{height: 80, width: 170, fontSize: 40, color: "#FF00A7"}}
                onChange={this.handleChange}
              />
            </div>
            <div>
              and I wish 
              <textarea 
                type="text" 
                name="wish" 
                placeholder="tell us your wish!" 
                style={{height: 80, width: 170, fontSize: 40, color: "#FF00A7"}}
                onChange={this.handleChange}
              /> 
            </div>
          </div>
        </form>
        <div>
          <h2 className="signup-text" style={{fontSize: 40}}>I wish to:</h2>
        </div>

        
        <div>
          <Wish 
              handleClick={this.submitNewWish} 
              objective={"GO"} 
              goal={"Somewhere"} 
              imgSrc={"toGo"} 
              leftPadding={0}
          />

          <Wish 
            handleClick={this.submitNewWish} 
            objective={"MEET"} 
            goal={"Someone"} 
            imgSrc={"toMeet"} 
            leftPadding={35}
          />
          
          <Wish 
            handleClick={this.submitNewWish} 
            objective={"BE"} 
            goal={"Someone"} 
            imgSrc={"toBe"} 
            leftPadding={35}
          />

          <Wish 
            handleClick={this.submitNewWish} 
            objective={"SEE"} 
            goal={"Something"} 
            imgSrc={"toSee"} 
            leftPadding={35}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    wishType: state.wish.wishType
  }
}

export default connect(
  mapStateToProps, 
  {
    setWishType,
    createNewWish,
    setChildInfo
  }
)(ChildSignUp)

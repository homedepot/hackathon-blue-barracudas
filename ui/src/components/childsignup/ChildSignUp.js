import React, { Component } from 'react'
import Image from '../image/Image'
import './ChildSignUp.css'
import { connect } from 'react-redux'
import { setWishType, createNewWish, setChildInfo } from '../../actions/wishActions'
import Nav from '../nav/Nav'

const Wish = (props) => {
  return (
    <div onClick={() => props.handleClick(props.imgSrc)}
         className={'wish-type-image '
            + (props.wishType === props.imgSrc
              ? 'active'
              : '')}>
      <div className='wish-type-div'>
        <Image source={`${props.imgSrc}`} />
      </div>
      <h2 className="signup-text">{props.objective}</h2>
      <div className="signup-text">{props.goal}</div>
    </div>
  )
};

class ChildSignUp extends Component {
  state = {
    name: '',
    age: '',
    city: '',
    details: '',
    wish: ''
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({[event.target.name]: event.target.value})
  };

  submitNewWish = (event) => {
    event.preventDefault();
    this.props.history.push('/wish-submitted')
    this.props.setChildInfo(this.state);
  };

  render() {
    return (
      <div
        className="signup-card"
        style={{ fontFamily: 'Arial Rounded MT Bold' }}
      >
        <Nav />
        <div style={{display: "flex" }}>
          <h1 className="signup-text" style={{
            marginTop: 0,
            paddingTop: 30,
            paddingBottom: 30,
            fontSize: 80,
            display: "inline-block" }}>
            Hello, everyone!
          </h1>
        </div>
        <form className='child-signup-form' onSubmit={this.submitNewWish}>
          <div className="signup-text" style={{}}>
            <p>My name is: &nbsp;
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              onChange={this.handleChange}
              style={{ width: '400px' }}
            /></p>
            <p>
            I am: &nbsp;
            <input 
              type="text" 
              name="age" 
              placeholder="your age" 
              onChange={this.handleChange}
              style={{ width: '250px' }}
            />
            years old!
            </p>
            <p>
              I am from &nbsp;
              <input
                type="text"
                name="city"
                placeholder="enter your city"
                onChange={this.handleChange}
                className='child-input'
              />
            </p>
            <p>
              I &nbsp;
              <input
                type="text"
                name="details"
                placeholder="tell us about you!"
                className='child-input'
                onChange={this.handleChange}
                style={{ width: '630px' }}
              />
            </p>
            <p>
              and I wish &nbsp;
              <input
                type="text"
                name="wish"
                placeholder="tell us your wish!"
                className='child-input'
                onChange={this.handleChange}
                style={{ width: '450px' }}
              />
            </p>
          </div>

          <div style={{margin: '10px 0 15px'}}>
            <h2 className="signup-text">I wish to:</h2>
          </div>
          <div>
            <Wish
              handleClick={this.props.setWishType}
              objective={"GO"}
              goal={"Somewhere"}
              imgSrc={"toGo"}
              wishType={this.props.wishType}
            />

            <Wish
              handleClick={this.props.setWishType}
              objective={"MEET"}
              goal={"Someone"}
              imgSrc={"toMeet"}
              wishType={this.props.wishType}
            />

            <Wish
              handleClick={this.props.setWishType}
              objective={"BE"}
              goal={"Someone"}
              imgSrc={"toBe"}
              wishType={this.props.wishType}
            />

            <Wish
              handleClick={this.props.setWishType}
              objective={"SEE"}
              goal={"Something"}
              imgSrc={"toSee"}
              wishType={this.props.wishType}
            />
          </div>

          <button className="btn btn-info">
            Make Your Wish
          </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    wishType: state.wish.wishType
  }
};

export default connect(
  mapStateToProps, 
  {
    setWishType,
    createNewWish,
    setChildInfo
  }
)(ChildSignUp)

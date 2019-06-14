import React, { Component } from 'react';
import './ChildSignUp.css';

class ChildSignUp extends Component {
  state = {
    childName: "",
    childAge: ""
  }

  setName = event => this.setState({childName: event.target.value});

  setAge = event => this.setState({childAge: event.target.value});

  render() {
    return (
      <div className="signup-card">
        <div>
          <h1 className="signup-text">Hello, everyone!</h1>
        </div>
        <form>
          <div className="signup-text">
            My name is{' '}
            <input type="text" name="name" placeholder="enter your name" onChange={this.setName}/> and
            I am <input type="text" name="name" placeholder="your age" /> years
            old!
          </div>
          <h2 className="signup-text">I wish to:</h2>
        </form>
      </div>
    )
  }
}

export default ChildSignUp;

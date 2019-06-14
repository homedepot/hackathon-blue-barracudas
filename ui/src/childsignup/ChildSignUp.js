import React, { Component, Fragment } from 'react'

class ChildSignUp extends Component {
  state = {
    childName: "",
    childAge: ""
  }

  setName = event => this.setState({childName: event.target.value})

  render() {
    console.log("Child name: ", this.state.childName);
    return (
      <Fragment>
        <div>
          <h1>Hello!</h1>
        </div>
        <form>
          <div>
            My name is{' '}
            <input type="text" name="name" placeholder="enter your name" onChange={this.setName}/> and
            I am <input type="text" name="name" placeholder="your age" /> years
            old!
          </div>
        </form>
      </Fragment>
    )
  }
}

export default ChildSignUp

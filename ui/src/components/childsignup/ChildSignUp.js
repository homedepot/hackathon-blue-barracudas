import React, { Component } from 'react'
import Image from '../image/Image'
import './ChildSignUp.css'

class ChildSignUp extends Component {
  state = {
    childName: '',
    childAge: '',
    wishes: ['toGo', 'toMeet', 'toBe', 'toSee']
  }

  setName = event => this.setState({ childName: event.target.value })

  setAge = event => this.setState({ childAge: event.target.value })

  render() {
    return (
      <div className="signup-card" style={{fontFamily: "Arial Rounded MT Bold"}}>
        <div>
          <h1 className="signup-text" style={{ marginTop: 0, fontSize: 80 }}>
            Hello, everyone!
          </h1>
        </div>
        <form>
          <div className="signup-text">
            My name is{' '}
            <input
              type="text"
              name="name"
              placeholder="enter your name"
              onChange={this.setName}
            />{' '}
            and I am <input type="text" name="name" placeholder="your age" />{' '}
            years old!
          </div>
        </form>
        <div>
          <h2 className="signup-text">I wish to:</h2>
        </div>

        <div>
          <div style={{ display: 'inline-block' }}>
            <div
              style={{
                width: 120,
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 5,
                borderStyle: 'solid'
              }}
            >
              <Image source="toGo" />
            </div>
            <h2 className="signup-text">GO</h2>
            <div className="signup-text">Somewhere</div>
          </div>

          <div style={{ display: 'inline-block', paddingLeft: 5 }}>
            <div
              style={{
                width: 120,
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 5,
                borderStyle: 'solid'
              }}
            >
              <Image source="toMeet" />
            </div>
            <h2 className="signup-text">MEET</h2>
            <div className="signup-text">Someone</div>
          </div>

          <div style={{ display: 'inline-block', paddingLeft: 5 }}>
            <div
              style={{
                width: 120,
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 5,
                borderStyle: 'solid'
              }}
            >
              <Image source="toBe" />
            </div>
            <h2 className="signup-text">BE</h2>
            <div className="signup-text">Someone</div>
          </div>

          <div style={{ display: 'inline-block', paddingLeft: 5 }}>
            <div
              style={{
                width: 120,
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 5,
                borderStyle: 'solid'
              }}
            >
              <Image source="toSee" />
            </div>
            <h2 className="signup-text">SEE</h2>
            <div className="signup-text">Something</div>
          </div>
        </div>
      </div>
    )
  }
}

export default ChildSignUp

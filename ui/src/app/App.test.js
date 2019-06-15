import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { Route } from 'react-router-dom'
import Landing from '../components/landing/Landing'
import Login from '../components/login/Login'
import Wish from '../components/wish/Wish'

describe('Default routing behavior', () => {
  it('renders the login page by default', () => {
    const wrapper = shallow(<App />)

    const landingRoute = wrapper
      .find(Route)
      .at(0)
      .props()

    expect(landingRoute.path).toEqual('/')
    
    const loginRoute = wrapper
      .find(Route)
      .at(1)
      .props()

    expect(loginRoute.path).toEqual('/login')

    const wishRoute = wrapper
      .find(Route)
      .at(2)
      .props()

    expect(wishRoute.path).toEqual('/wishes')
  })
})

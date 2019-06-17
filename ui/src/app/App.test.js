import React from 'react'
import { shallow } from 'enzyme'
import App from './App'
import { Route } from 'react-router-dom'


describe('Default routing behavior', () => {
  it('renders the login page by default', () => {
    const wrapper = shallow(<App />)

    const landingRoute = wrapper
      .find(Route)
      .at(0)
      .props()

    expect(landingRoute.path).toEqual('/')

    const childSignUpRoute = wrapper
      .find(Route)
      .at(1)
      .props()

    expect(childSignUpRoute.path).toEqual('/childsignup')
    
    const childDetailsRoute = wrapper
      .find(Route)
      .at(2)
      .props()

    expect(childDetailsRoute.path).toEqual('/child-details')
    
    const confirmationPage = wrapper
      .find(Route)
      .at(3)
      .props()

    expect(confirmationPage.path).toEqual('/wish-submitted')

    const manageRoute = wrapper
      .find(Route)
      .at(4)
      .props()

    expect(manageRoute.path).toEqual('/manage-wishes')
    
    const dateListRoute = wrapper
      .find(Route)
      .at(5)
      .props()

    expect(dateListRoute.path).toEqual('/date-list')
    
    const loginRoute = wrapper
      .find(Route)
      .at(6)
      .props()
    
    expect(loginRoute.path).toEqual('/admin')
  })
})

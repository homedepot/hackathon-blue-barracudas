import ManageWishes from './ManageWishes'
import React from 'react'
import { shallow } from 'enzyme'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
const middlewares = [thunkMiddleware, promiseMiddleware]
const mockStore = configureStore(middlewares)

let component
const renderComponent = () => {
  return shallow(
    <ManageWishes/>
  )
}
beforeEach(()=>{
  component = renderComponent()
})

it('displays the WishList component', ()=>{
  const wishListComponent = component.find('WishList')
  expect(wishListComponent).toBeDefined()
})

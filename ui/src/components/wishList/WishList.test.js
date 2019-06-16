import React from 'react'
import WishList from './WishList'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
const middlewares = [thunkMiddleware, promiseMiddleware]
const mockStore = configureStore(middlewares)

let component
let store

const renderComponent = (store) => {
  return mount(
    <Provider store={store}>
      <WishList />
    </Provider>
  )
}

beforeEach(()=>{
  store = mockStore({
    wish:{
      wishes: 
      [{
        childImage: 'img.jpg?1',
        childFirstName: 'Lark',
        childAge: '3',
        wishDetailsText: 'Lark loves fun!',
        childHomeCity: 'Ancorage',
        sponsor: 'img.jpg',
        wishType: 'toGo',
        updatedAt: 1561262400000
      }]
    }
  })
  component = renderComponent(store)
})

it('sets the color of the date display to magenta', ()=>{
 const calendarComponent = component.find('Image')
 expect(calendarComponent.at(0).props().source).toEqual('blueMonth')
})

it('sets the color of the date display to blue', ()=>{
  const calendarComponent = component.find('.date')
  expect(calendarComponent.at(0).props().className).toEqual('date blue')})

it('displays wish list depending on number of wishes', ()=>{
  const wishes = component.find('Wish')
  expect(wishes.length).toEqual(1)
})
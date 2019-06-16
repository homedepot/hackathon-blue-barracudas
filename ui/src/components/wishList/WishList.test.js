import React from 'react'
import WishList from './WishList'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import promiseMiddleware from 'redux-promise'
import thunkMiddleware from 'redux-thunk'
const middlewares = [thunkMiddleware, promiseMiddleware]
const mockStore = configureStore(middlewares)

let props
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
      wishes: [{ childImage: 'image.jpg',
      childName: 'Lark',
      childAge: '3',
      childDetails: 'Lark loves fun!',
      childTown: 'Ancorage',
      sponsor: 'image.jpg',
      wishType: 'toGo',}]
    }
  })
  component = renderComponent(store)
})

it('displays wish list depending on number of wishes', ()=>{
  const wishes = component.find('Wish')
  expect(wishes.length).toEqual(1)
})
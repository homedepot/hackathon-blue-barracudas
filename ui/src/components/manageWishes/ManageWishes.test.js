// import ManageWishes from './ManageWishes'
// import React from 'react'
// import { mount } from 'enzyme'
// import { Provider } from 'react-redux'
// import configureStore from 'redux-mock-store'
// import promiseMiddleware from 'redux-promise'
// import thunkMiddleware from 'redux-thunk'
// const middlewares = [thunkMiddleware, promiseMiddleware]
// const mockStore = configureStore(middlewares)
//
// let component
// let store

const renderComponent = (store) => {
  // return mount(
  //   <Provider store={store}>
  //     <ManageWishes />
  //   </Provider>
  // )
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

it.skip('displays the WishList component', ()=>{
  const wishListComponent = component.find('WishList')
  expect(wishListComponent.length).toEqual(1)
})

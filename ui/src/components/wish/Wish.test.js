import React from 'react'
import Wish from './Wish.js'
import { shallow } from 'enzyme'

let props
let component 
const renderComponent = (props) => {
  return shallow(
    <Wish/>
  )
}

beforeEach(()=>{
  props = {

  }
  component = renderComponent(props)
})

it('renders the page', ()=>{
  const wishContainer = component.find('.child-information')
  expect(wishContainer.text()).toEqual('Test')
})

it('renders the page', ()=>{
  const wishContainer = component.find('.child-information')
  expect(wishContainer.text()).toEqual('Test')
})
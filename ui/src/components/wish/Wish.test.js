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
  const wishContainer = component.find('.test')
  expect(wishContainer.text()).toEqual('Test')
})
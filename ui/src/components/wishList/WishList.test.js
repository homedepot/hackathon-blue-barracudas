import React from 'react'
import WishList from './WishList'
import { shallow } from 'enzyme'

let props
let component

const renderComponent = (props) => {
  return shallow(
    <WishList {...props}/>
  )
}

beforeEach(()=>{
  props = {
    wishes: [{ childImage: 'image.jpg',
    childName: 'Lark',
    childAge: '3',
    childDetails: 'Lark loves fun!',
    childTown: 'Ancorage',
    sponsor: 'image.jpg',
    wishType: 'toGo',}]
  }
  component = renderComponent(props)
})

it('displays wish list depending on number of wishes', ()=>{
  const wishes = component.find('Wish')
  expect(wishes.length).toEqual(props.wishes.length)
})
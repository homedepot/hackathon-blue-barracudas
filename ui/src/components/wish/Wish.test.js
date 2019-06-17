import React from 'react'
import Wish from './Wish.js'
import { shallow } from 'enzyme'
import Image from '../image/Image'

let props
let component 
const renderComponent = (props) => {
  return shallow(
    <Wish {...props}/>
  )
}

beforeEach(()=>{
  props = {
    childImage: 'img.jpg?1',
    childFirstName: 'Lark',
    childAge: '3',
    wishDetailsText: 'Lark loves fun!',
    childHomeCity: 'Ancorage',
    sponsor: 'img.jpg',
    wishType: 'toGo',
    updatedAt: 1
  }
  component = renderComponent(props)
})

it('displays the child image', ()=>{
  const childImage = component.find('.profile-picture img')
  expect(childImage.props().src).toEqual(props.childImage)
})

it('displays the child name and age', ()=>{
  const childPersonalDetails = component.find('.lead')
  const expected = `${props.childFirstName} - Age ${props.childAge} from ${props.childHomeCity}`
  expect(childPersonalDetails.text()).toEqual(expected)
})

it('displays the child description', ()=>{
  const childDetails = component.find('.child-wish-details')
  expect(childDetails.text()).toEqual(props.wishDetailsText)
})

it('displays the sponsor logo', ()=>{
  const sponsor = component.find('.sponsor img')
  expect(sponsor.props().src).toEqual(props.sponsor)
})

it('displays the wishType image', ()=>{
  const wishType = component.find('.wish-type Image')
  expect(wishType.props().source).toEqual(props.wishType)
})

it('displays the forward chevron', ()=>{
  const chevron = component.find('.chevron Image')
  expect(chevron.props().source).toEqual('chevronForward')
})
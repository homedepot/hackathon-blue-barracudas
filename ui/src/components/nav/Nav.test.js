import React from 'react'
import Nav from './Nav'
import { shallow } from 'enzyme'
import { Link } from 'react-router-dom'
let props
let component 
const renderComponent = (props) => {
  return shallow(
    <Nav/>
  )
}

beforeEach(()=>{
  props = {

  }
  component = renderComponent(props)
})

it('galaxy logo is located on page', ()=>{
  const logoGalaxy = component.find('.logoGalaxy')
  expect(logoGalaxy).toBeDefined()
})

it('make a wish logo is located on page', ()=>{
  const logo = component.find('.logo')
  expect(logo).toBeDefined()
})

it('has a link to making a new wish for a child', ()=>{
  const links = component.find('Link')
  expect(links.length).toEqual(2)
})


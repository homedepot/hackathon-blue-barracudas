import wishReducer, { getDefaultState } from '../wishReducer'
import { GET_ALL_WISHES } from '../../actions/Constants.js'


describe(GET_ALL_WISHES, () => {
  it('gets all wishes', () => {
    const action = {
      type: GET_ALL_WISHES,
      payload: [{
        childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
        childName: 'Lark',
        childAge: '3',
        childDetails: 'Lark loves fun!',
        childTown: 'Ancorage',
        sponsor: 'https://i.imgur.com/CJjcguK.jpg',
        wishType: 'toGo',
      }]
    }
    const newState = wishReducer({}, action)
    expect(newState.wishes).toEqual([{
      childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
      childName: 'Lark',
      childAge: '3',
      childDetails: 'Lark loves fun!',
      childTown: 'Ancorage',
      sponsor: 'https://i.imgur.com/CJjcguK.jpg',
      wishType: 'toGo',
    }])
  })
})


describe('GET_ALL_GRANTED_WISHES', () => {
  it('gets all wishes', () => {
    const action = {
      type: 'GET_ALL_GRANTED_WISHES',
      payload: [{
        childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
        wishType: 'toGo',
        status: 'granted'
      }]
    }
    const newState = wishReducer({}, action)
    expect(newState.wishes).toEqual([{
      childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
      wishType: 'toGo',
      status: 'granted'
    }])
  })
})

describe('SET_DATE_MONTH', () => {
  it('gets all wishes', () => {
    const action = {
      type: 'SET_DATE_MONTH',
      payload: 'February'
    }
    const newState = wishReducer({}, action)
    expect(newState.dateMonth).toEqual('February')
  })
})

describe('SET_WISH_TYPE', () => {
  it('gets all wishes', () => {
    const action = {
      type: 'SET_WISH_TYPE',
      payload: 'toGo'
    }
    const newState = wishReducer({}, action)
    expect(newState.wishType).toEqual('toGo')
  })
})

describe('SET_CHILD_INFO', () => {
  it('gets all wishes', () => {
    const action = {
      type: 'SET_CHILD_INFO',
      payload: {
        childFirstName: 'Lorna'
      }
    }
    const newState = wishReducer({}, action)
    expect(newState.childInfo).toEqual({
      childFirstName: 'Lorna'
    })
  })
})

describe('returns default state given unfound action type', () => {
  it('gets all wishes', () => {
    const action = {
      type: 'UNKNOWN TYPE'
    }
    const newState = wishReducer(getDefaultState(), action)
    console.log(newState)
    expect(newState).toEqual(getDefaultState())
  })
})



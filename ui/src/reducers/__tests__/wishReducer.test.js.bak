import wishReducer from '../wishReducer'
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



import { GET_ALL_WISHES } from '../actions/Constants.js'

export const getDefaultState = () => {
  return {
    wishes: [
      {
        childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
        childFirstName: 'Lark',
        childAge: '3',
        wishDetailsText: 'Lark loves fun!',
        childHomeCity: 'Ancorage',
        sponsor: 'https://i.imgur.com/CJjcguK.jpg',
        wishType: 'toGo',
        updatedAt: 1561262400000
      },
      {
        childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
        childFirstName: 'Lark',
        childAge: '3',
        wishDetailsText: 'Lark loves fun!',
        childHomeCity: 'Ancorage',
        sponsor: 'https://i.imgur.com/CJjcguK.jpg',
        wishType: 'toGo',
        updatedAt: 1561262400000
      },
      {
        childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
        childFirstName: 'Lark',
        childAge: '3',
        wishDetailsText: 'Lark loves fun!',
        childHomeCity: 'Ancorage',
        sponsor: 'https://i.imgur.com/CJjcguK.jpg',
        wishType: 'toGo',
        updatedAt: 1561262400000
      },
    ]
  }
}

const wishReducer = (state = getDefaultState(), action) => {
  switch (action.type) {
    case GET_ALL_WISHES: {
      return {
        ...state,
        wishes: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default wishReducer

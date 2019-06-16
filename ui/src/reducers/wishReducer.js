import { GET_ALL_WISHES } from '../actions/Constants.js'

export const getDefaultState = () => {
  {
    wishes: [
      {
        childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
        childName: 'Lark',
        childAge: '3',
        childDetails: 'Lark loves fun!',
        childTown: 'Ancorage',
        sponsor: 'https://i.imgur.com/CJjcguK.jpg',
        wishType: 'toGo',
      },
      {
        childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
        childName: 'Lark',
        childAge: '3',
        childDetails: 'Lark loves fun!',
        childTown: 'Ancorage',
        sponsor: 'https://i.imgur.com/CJjcguK.jpg',
        wishType: 'toGo',
      },
      {
        childImage: 'https://i.imgur.com/AqQrCXI.jpg?1',
        childName: 'Lark',
        childAge: '3',
        childDetails: 'Lark loves fun!',
        childTown: 'Ancorage',
        sponsor: 'https://i.imgur.com/CJjcguK.jpg',
        wishType: 'toGo',
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

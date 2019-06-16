export const getDefaultState = () => {
  return {
    wishes: [],
    wishType: '',
    childInfo: {}
  }
}

const wishReducer = (state = getDefaultState(), action) => {
  switch (action.type) {
    case 'GET_ALL_WISHES': {
      return {
        ...state,
        wishes: action.payload
      }
    }
    case 'SET_DATE_MONTH': {
      return {
        ...state,
        dateMonth: action.payload
      }
    }
    case 'SET_WISH_TYPE': {
      return {
        ...state,
        wishType: action.payload
      }
    }
    case 'SET_CHILD_INFO': {
      return {
        ...state,
        childInfo: action.payload
      }
    }
    default: {
      return state
    }
  }
}

export default wishReducer

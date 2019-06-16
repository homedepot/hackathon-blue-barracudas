export const getAllWishes = () =>{
  return {
    type: 'GET_ALL_WISHES',
    payload: getAllWishesFromGraphQL()
  }
}

export const setDateMonth = (month) => {
  return{
    type: 'SET_DATE_MONTH',
    payload: month
  }
}

export const setWishType = (wishType) => {
  console.log("CALLED")
  return{
    type: 'SET_WISH_TYPE',
    payload: wishType
  }
}
const getAllWishesFromGraphQL = () => {
  //Need to connect to GraphQL from here
  return [
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
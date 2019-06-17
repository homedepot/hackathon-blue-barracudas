const axios = require('axios');
const expressDomain = process.env.REACT_APP_expressDomain || 'http://localhost:3002';

export const getAllWishes = () => {
  return {
    type: 'GET_ALL_WISHES',
    payload: getAllWishesFromGraphQL()
  }
}

export const setDateMonth = (month) => {
  return {
    type: 'SET_DATE_MONTH',
    payload: month
  }
}

export const createNewWish = (childWish) => {
  return {
    type: 'CREATE_NEW_WISH',
    payload: createNewWishInGraphQL(childWish)
  }
}

export const setChildInfo = (childInfo) => {
  return {
    type: 'SET_CHILD_INFO',
    payload: childInfo
  }
}

export const setWishType = (wishType) => {
  return {
    type: 'SET_WISH_TYPE',
    payload: wishType
  }
}

export const addSponsor = (wishId, sponsor) => {
  return{
    type: 'ADD_SPONSOR',
    payload: addSponsorInGraphQL(wishId, sponsor)
  }
}

export const checkOffWish = (wishId) => {
  return{
    type: 'SET_WISH_TYPE',
    payload: changeStatusToCompleteInGraphQL(wishId)
  }
}

const createNewWishInGraphQL = (childWish) => {
  //Put call to create wish in GraphQL here
  console.log(childWish)
}
const addSponsorInGraphQL = (wishId, sponsor) => {
  //Put call to update sponsor here
  console.log(wishId, sponsor)
}
const changeStatusToCompleteInGraphQL = (wishId) => {
  //Put call to change status to complete here
  console.log(wishId)
}

const getAllWishesFromGraphQL = async () => {
  const response = await axios
    .post(`${expressDomain}/graphql`, {

    });
  console.log({response})
  return response.data;

}
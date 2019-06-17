const axios = require('axios');
const expressDomain = process.env.REACT_APP_expressDomain || 'http://localhost:3002';

export const getAllWishes = async () => ({
    type: 'GET_ALL_WISHES',
    payload: await getAllWishesFromGraphQL()
  });

export const setDateMonth = (month) => ({
    type: 'SET_DATE_MONTH',
    payload: month
  });

export const createNewWish = (childWish) => ({
    type: 'CREATE_NEW_WISH',
    payload: createNewWishInGraphQL(childWish)
  });

export const setChildInfo = (childInfo) => ({
    type: 'SET_CHILD_INFO',
    payload: childInfo
  });

export const setWishType = (wishType) => ({
    type: 'SET_WISH_TYPE',
    payload: wishType
  });

export const addSponsor = (wishId, sponsor) => ({
    type: 'ADD_SPONSOR',
    payload: addSponsorInGraphQL(wishId, sponsor)
  });

export const checkOffWish = (wishId) => ({
    type: 'SET_WISH_TYPE',
    payload: changeStatusToCompleteInGraphQL(wishId)
  });

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

const getAllWishesFromGraphQL = async () =>
  (await axios
    .post(`${expressDomain}/graphql`,
      {
        query: `{ 
        wishes{
          id
          wishDetailsText
          wishStatus
          wishType
          childFirstName
          childLastName
          childAge
          parentFirstName
          parentLastName
          childHomeCity
          sponsorID
          createdAt
          updatedAt
        }}`
      })).data.data.wishes;
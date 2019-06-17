const faker = require('faker');
const sample = require("lodash").sample;

const wishDetails = [
  "I want to be a whale trainer at the georgia Aquriam",
  "Go on set of my favorite Disney Channel Show, Andi Mack",
  "Meet superman",
  "I want to ride an elephant",
];

const requestTypes = [
  'Requested',
  'Granted',
  'Approved',
];

const wishTypes = [
  'Go Somewhere',
  'Meet Someone',
  'Be Someone',
  'See Something'
];

const randomNumberBetween = (start, end) =>
  Math.floor(Math.random() * end) + start;

module.exports = (numberOfWishes, attributes = {}) => {

  const wishes = [];

  for(i=0; i<numberOfWishes; i++) {
    const lastName = faker.fake("{{name.lastName}}");

    wishes.push({
      "wishDetailsText": sample(wishDetails),
      "wishStatus": sample(requestTypes),
      "wishType": sample(wishTypes),
      "childFirstName": faker.fake("{{name.firstName}}"),
      "childLastName": lastName,
      "childAge": randomNumberBetween(5, 9),
      "parentFirstName": faker.fake("{{name.firstName}}"),
      "parentLastName": lastName,
      "childHomeCity": faker.fake("{{address.city}}, {{address.stateAbbr}}"),
      "sponsorID": sample(['1', '2']),
      "createdAt": 1561262400000,
      "updatedAt": 1561262400000,
      ...attributes
    })
  }

  return wishes;

};
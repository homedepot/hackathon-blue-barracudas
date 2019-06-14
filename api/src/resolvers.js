const getWish = require('./wish/resolvers');
const getSponsor = require('./sponsor/resolvers');

module.exports = {
  wishes: getWish,
  sponsors: getSponsor
}
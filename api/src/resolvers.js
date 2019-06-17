const wishResolver = require('./wish/resolvers');
const getSponsor = require('./sponsor/resolvers');

module.exports = {
  wish: wishResolver.getWishById,
  wishes: wishResolver.getAllWishes,
  sponsors: getSponsor
}
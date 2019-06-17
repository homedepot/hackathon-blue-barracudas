const getWishById = (args, context) =>
  context.db
    .collection('wishes')
    .find({"id": parseInt(args.id)})
    .next();

const getAllWishes = (args, context) =>
  context.db
    .collection('wishes')
    .find()
    .toArray();

module.exports = { getWishById, getAllWishes }
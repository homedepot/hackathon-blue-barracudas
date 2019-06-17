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

const getWishesByStatus = (args, context) =>
  context.db
    .collection('wishes')
    .find({"wishStatus": args.wishStatus})
    .toArray();

module.exports = { getWishById, getAllWishes, getWishesByStatus }
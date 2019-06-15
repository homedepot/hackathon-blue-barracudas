module.exports = (args, context) => {
  const filter = {};
  if (args.id) filter.id = args.id;
  return context.db
    .collection('wishes')
    .find(filter)
    .next();
};
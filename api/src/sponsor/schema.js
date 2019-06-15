const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

module.exports = makeExecutableSchema({
  typeDefs: `
  
    type Query {
      name: String,
      pocName: String,
      city: String,
      phone: String,
    }
  `
});
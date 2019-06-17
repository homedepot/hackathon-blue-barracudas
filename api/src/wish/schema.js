const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

module.exports = makeExecutableSchema({
  typeDefs: `
    type Query {
      wishes: [Wish]
      wish(id: String!): Wish
    }
    
    type Wish {
      id: String,
      wishDetailsText: String,
      wishStatus: String,
      wishType: String,
      childFirstName: String,
      childLastName:String,
      childAge: String,
      parentFirstName:String,
      parentLastName: String,
      childHomeCity: String,
      sponsorID : String,
      createdAt: String,
      updatedAt: String,
    }
  `
});
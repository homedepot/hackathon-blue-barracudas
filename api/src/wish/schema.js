const makeExecutableSchema = require('graphql-tools').makeExecutableSchema;

module.exports = makeExecutableSchema({
  typeDefs: `
    type Query {
      wishes(id: String!): Wish
    }
    
    type Wish {
      createDate: String,
      lastUpdateDate: String,
      lastUpdateUserid: String,
      wishDetailsText: String,
      wishStatus: String,
      wishType: String,
      childFirstname: String,
      childLastname:String,
      childAge: String,
      parentFirstName:String,
      parentLastname: String,
      childHomeCity: String
    }

  `
});
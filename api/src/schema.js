const mergeSchemas = require('graphql-tools').mergeSchemas;

const sponsorSchema = require('./sponsor/schema')
const wishSchema = require('./wish/schema')

module.exports = mergeSchemas({
  schemas: [
    sponsorSchema,
    wishSchema,
  ]
});

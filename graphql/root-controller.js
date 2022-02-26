const {
    gql,
} = require('apollo-server-express');

const {
    merge,
} = require('lodash');

const {
    pubsub,
    withFilter,
} = require('../middleware/pubsubs');

const {
    makeExecutableSchema
} = require('@graphql-tools/schema');

const {
    productSchema,
    productController
} = require("./product-controller/product-controller");

const typeDefs = gql`
 type Query {
    _empty: String 
 }
 
 type Mutation {
     _empty: String 
  } 
  
  ${productSchema}
 `;

const resolvers = merge(
    {},
    productController,
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

exports.schema = schema;
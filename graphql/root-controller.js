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


input productReq {
    name: String,
    slug: String,
    category: String,
    image: String,
    price: Float,
    brand: String,
    rating: Float,
    numReviews: Int,
    countInStock: Int,
    description: String,
}

type productRes {
    _id: String!,
    name: String,
    slug: String,
    category: String,
    image: String,
    price: Float,
    brand: String,
    rating: Float,
    numReviews: Int,
    countInStock: Int,
    description: String,
}

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
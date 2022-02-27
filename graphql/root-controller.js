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
    orderSchema,
    orderController
} = require("./order-controller/order-controller");

const {
    paypalSchema,
    paypalController
} = require("./paypal-controller/paypal-controller");

const {
    productSchema,
    productController
} = require("./product-controller/product-controller");

const {
    userSchema,
    userController
} = require("./user-controller/user-controller");

const typeDefs = gql`
input orderItemReq {
    name: String,
    quantity: Int,
    image: String,
    price: Float,
}

input shippingAddressReq {
    fullName: String,
    address: String,
    city: String,
    postalCode: String,
    country: String,
    location: locationReq,
}

input locationReq {
    lat: String,
    lng: String,
    address: String,
    name: String,
    vicinity: String,
    googleAddressId: String,
}

type orderItemRes {
    _id: String!,
    name: String,
    quantity: Int,
    image: String,
    price: Float,
}

type shippingAddressRes {
    fullName: String,
    address: String,
    city: String,
    postalCode: String,
    country: String,
    location: locationRes,
}

type locationRes {
    lat: String,
    lng: String,
    address: String,
    name: String,
    vicinity: String,
    googleAddressId: String,
}

type userPrivateRes {
    _id: String!,
    name: String,
    email: String,
    isAdmin: Boolean,
}

type paymentResultRes {
    id: String,
    status: String,
    email_address: String,
}

type orderRes {
    _id: String!,
    user: userPrivateRes,
    shippingAddress: shippingAddressRes,
    paymentMethod: String,
    paymentResult: paymentResultRes,
    itemsPrice: Float,
    shippingPrice: Float,
    taxPrice: Float,
    totalPrice: Float,
    isPaid: Boolean,
    isDelivered: Boolean,
    paidAt: String,
    deliveredAt: String,
    orderItems: [orderItemRes!],
}

input userReq {
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
}

type userRes {
    _id: String!,
    name: String,
    email: String,
    password: String,
    isAdmin: Boolean,
}

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
  
  ${orderSchema}
  ${paypalSchema}
  ${productSchema}
  ${userSchema}
 `;

const resolvers = merge(
    {},
    orderController,
    paypalController,
    productController,
    userController,
);

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

exports.schema = schema;
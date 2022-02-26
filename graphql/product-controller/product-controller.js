const {
    merge,
} = require('lodash');

const {
    addManyProductSchema,
    addManyProductController
} = require("./add-many-product");

const {
    addOneProductSchema,
    addOneProductController
} = require("./add-one-product");

const {
    getOneProductSchema,
    getOneProductController
} = require("./get-one-product.js");

const {
    getProductSchema,
    getProductController
} = require("./get-product.js");

exports.productSchema = `
    ${addManyProductSchema}
    ${addOneProductSchema}
    ${getOneProductSchema}
    ${getProductSchema}
  
  `;

exports.productController = merge({},
    addManyProductController,
    addOneProductController,
    getOneProductController,
    getProductController,
);
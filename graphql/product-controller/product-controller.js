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
    getProductSchema,
    getProductController
} = require("./get-product.js");

exports.productSchema = `
    ${addManyProductSchema}
    ${addOneProductSchema}
    ${getProductSchema}
  
  `;

exports.productController = merge({},
    addManyProductController,
    addOneProductController,
    getProductController,
);
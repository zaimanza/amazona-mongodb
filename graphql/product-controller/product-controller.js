const {
    merge,
} = require('lodash');

const {
    addProductSchema,
    addProductController
} = require("./add-product");

exports.productSchema = `
    ${addProductSchema}
  
  `;

exports.productController = merge({},
    addProductController,
);
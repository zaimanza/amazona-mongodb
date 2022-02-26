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
    checkStockOneProductSchema,
    checkStockOneProductController
} = require("./check-stock-one-product");

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
    ${checkStockOneProductSchema}
    ${getOneProductSchema}
    ${getProductSchema}
  
  `;

exports.productController = merge({},
    addManyProductController,
    addOneProductController,
    checkStockOneProductController,
    getOneProductController,
    getProductController,
);
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
    getManyProductSchema,
    getManyProductController
} = require("./get-many-product.js");

exports.productSchema = `
    ${addManyProductSchema}
    ${addOneProductSchema}
    ${checkStockOneProductSchema}
    ${getOneProductSchema}
    ${getManyProductSchema}
  
  `;

exports.productController = merge({},
    addManyProductController,
    addOneProductController,
    checkStockOneProductController,
    getOneProductController,
    getManyProductController,
);
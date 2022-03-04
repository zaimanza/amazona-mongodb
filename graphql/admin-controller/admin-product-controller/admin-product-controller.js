const {
    merge,
} = require('lodash');

const {
    addDummyProductSchema,
    addDummyProductController
} = require("./add-dummy-product");

const {
    deleteProductByIdSchema,
    deleteProductByIdController
} = require("./delete-product-by-id");

const {
    getProductByIdSchema,
    getProductByIdController
} = require("./get-product-by-id");

const {
    updateProductByIdSchema,
    updateProductByIdController
} = require("./update-product-by-id");

exports.adminProductSchema = `
${addDummyProductSchema}
${deleteProductByIdSchema}
${getProductByIdSchema}
${updateProductByIdSchema}
  
  `;

exports.adminProductController = merge({},
    addDummyProductController,
    deleteProductByIdController,
    getProductByIdController,
    updateProductByIdController,
);
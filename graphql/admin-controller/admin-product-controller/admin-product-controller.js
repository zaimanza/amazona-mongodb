const {
    merge,
} = require('lodash');

const {
    getProductByIdSchema,
    getProductByIdController
} = require("./get-product-by-id");

const {
    updateProductByIdSchema,
    updateProductByIdController
} = require("./update-product-by-id");

exports.adminProductSchema = `
${getProductByIdSchema}
${updateProductByIdSchema}
  
  `;

exports.adminProductController = merge({},
    getProductByIdController,
    updateProductByIdController,
);
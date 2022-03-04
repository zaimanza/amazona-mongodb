const {
    merge,
} = require('lodash');

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
${deleteProductByIdSchema}
${getProductByIdSchema}
${updateProductByIdSchema}
  
  `;

exports.adminProductController = merge({},
    deleteProductByIdController,
    getProductByIdController,
    updateProductByIdController,
);
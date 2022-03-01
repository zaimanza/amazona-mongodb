const {
    merge,
} = require('lodash');

const {
    getProductByIdSchema,
    getProductByIdController
} = require("./get-product-by-id");

exports.adminProductSchema = `
${getProductByIdSchema}
  
  `;

exports.adminProductController = merge({},
    getProductByIdController,
);
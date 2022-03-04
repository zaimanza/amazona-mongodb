const {
    merge,
} = require('lodash');

const {
    getProductManyReviewByIdSchema,
    getProductManyReviewByIdController
} = require("./get-product-many-review-by-id");

exports.productReviewSchema = `
    ${getProductManyReviewByIdSchema}
  
  `;

exports.productReviewController = merge({},
    getProductManyReviewByIdController,
);
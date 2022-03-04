const {
    merge,
} = require('lodash');

const {
    getProductManyReviewByIdSchema,
    getProductManyReviewByIdController
} = require("./get-product-many-review-by-id");

const {
    updateUserReviewSchema,
    updateUserReviewController
} = require("./update-user-review");

exports.productReviewSchema = `
    ${getProductManyReviewByIdSchema}
    ${updateUserReviewSchema}
  
  `;

exports.productReviewController = merge({},
    getProductManyReviewByIdController,
    updateUserReviewController,
);
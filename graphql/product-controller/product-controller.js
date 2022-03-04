const {
    merge,
} = require('lodash');

const {
    productReviewSchema,
    productReviewController
} = require("./review-controller/review-controller");

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
    getManyProductCategorySchema,
    getManyProductCategoryController
} = require("./get-many-product-category");

const {
    getManyProductSchema,
    getManyProductController
} = require("./get-many-product.js");

const {
    s3ProductUploadUrlSchema,
    s3ProductUploadUrlController
} = require("./s3-product-upload-url");

exports.productSchema = `
    ${productReviewSchema}
    ${addManyProductSchema}
    ${addOneProductSchema}
    ${checkStockOneProductSchema}
    ${getOneProductSchema}
    ${getManyProductCategorySchema}
    ${getManyProductSchema}
    ${s3ProductUploadUrlSchema}
  
  `;

exports.productController = merge({},
    productReviewController,
    addManyProductController,
    addOneProductController,
    checkStockOneProductController,
    getOneProductController,
    getManyProductCategoryController,
    getManyProductController,
    s3ProductUploadUrlController,
);
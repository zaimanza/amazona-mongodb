const {
    merge,
} = require('lodash');

const {
    addOrderSchema,
    addOrderController
} = require("./add-order");

exports.orderSchema = `
    ${addOrderSchema}
  
  `;

exports.orderController = merge({},
    addOrderController,
);
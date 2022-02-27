const {
    merge,
} = require('lodash');

const {
    addOrderSchema,
    addOrderController
} = require("./add-order");

const {
    getOneOrderSchema,
    getOneOrderController
} = require("./get-one-order");

exports.orderSchema = `
${addOrderSchema}
${getOneOrderSchema}
  `;

exports.orderController = merge({},
    addOrderController,
    getOneOrderController,
);
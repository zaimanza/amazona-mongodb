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

const {
    payOrderSchema,
    payOrderController
} = require("./pay-order");

exports.orderSchema = `
${addOrderSchema}
${getOneOrderSchema}
${payOrderSchema}
  `;

exports.orderController = merge({},
    addOrderController,
    getOneOrderController,
    payOrderController,
);
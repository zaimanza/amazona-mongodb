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
    getUserManyOrderSchema,
    getUserManyOrderController
} = require("./get-user-many-order");

const {
    payOrderSchema,
    payOrderController
} = require("./pay-order");

exports.orderSchema = `
${addOrderSchema}
${getOneOrderSchema}
${getUserManyOrderSchema}
${payOrderSchema}
  `;

exports.orderController = merge({},
    addOrderController,
    getOneOrderController,
    getUserManyOrderController,
    payOrderController,
);
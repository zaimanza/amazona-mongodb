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

const {
    updateOrderDeliverSchema,
    updateOrderDeliverController
} = require("./update-order-deliver");

exports.orderSchema = `
${addOrderSchema}
${getOneOrderSchema}
${getUserManyOrderSchema}
${payOrderSchema}
${updateOrderDeliverSchema}
  `;

exports.orderController = merge({},
    addOrderController,
    getOneOrderController,
    getUserManyOrderController,
    payOrderController,
    updateOrderDeliverController,
);
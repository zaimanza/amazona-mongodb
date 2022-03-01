const {
    merge,
} = require('lodash');

const {
    adminProductSchema,
    adminProductController
} = require("./admin-product-controller/admin-product-controller");

const {
    dashboardSummarySchema,
    dashboardSummaryController
} = require("./dashboard-summary");

const {
    getManyOrderSchema,
    getManyOrderController
} = require("./get-many-order");

exports.adminSchema = `
${adminProductSchema}
${dashboardSummarySchema}
${getManyOrderSchema}
  
  `;

exports.adminController = merge({},
    adminProductController,
    dashboardSummaryController,
    getManyOrderController,
);
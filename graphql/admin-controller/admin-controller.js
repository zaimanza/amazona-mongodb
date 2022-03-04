const {
    merge,
} = require('lodash');

const {
    adminProductSchema,
    adminProductController
} = require("./admin-product-controller/admin-product-controller");

const {
    adminUserSchema,
    adminUserController
} = require("./admin-user-controller/admin-user-controller");

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
${adminUserSchema}
${dashboardSummarySchema}
${getManyOrderSchema}
  
  `;

exports.adminController = merge({},
    adminProductController,
    adminUserController,
    dashboardSummaryController,
    getManyOrderController,
);
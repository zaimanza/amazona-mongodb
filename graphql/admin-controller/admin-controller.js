const {
    merge,
} = require('lodash');

const {
    dashboardSummarySchema,
    dashboardSummaryController
} = require("./dashboard-summary");

const {
    getManyOrderSchema,
    getManyOrderController
} = require("./get-many-order");

exports.adminSchema = `
${dashboardSummarySchema}
${getManyOrderSchema}
  
  `;

exports.adminController = merge({},
    dashboardSummaryController,
    getManyOrderController,
);
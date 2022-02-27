const {
    merge,
} = require('lodash');

const {
    dashboardSummarySchema,
    dashboardSummaryController
} = require("./dashboard-summary");

exports.adminSchema = `
    ${dashboardSummarySchema}
  
  `;

exports.adminController = merge({},
    dashboardSummaryController,
);
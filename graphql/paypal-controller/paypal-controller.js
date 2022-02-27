const {
    merge,
} = require('lodash');

const {
    getClientIdSchema,
    getClientIdController
} = require("./get-client-id");

exports.paypalSchema = `
    ${getClientIdSchema}
  
  `;

exports.paypalController = merge({},
    getClientIdController,
);
const {
    merge,
} = require('lodash');

const {
    getAdminAllUserSchema,
    getAdminAllUserController
} = require("./get-admin-all-user");

exports.adminUserSchema = `
${getAdminAllUserSchema}
  
  `;

exports.adminUserController = merge({},
    getAdminAllUserController,
);
const {
    merge,
} = require('lodash');

const {
    deleteAdminUserByIdSchema,
    deleteAdminUserByIdController
} = require("./delete-admin-user-by-id");

const {
    getAdminAllUserSchema,
    getAdminAllUserController
} = require("./get-admin-all-user");

const {
    getAdminUserByIdSchema,
    getAdminUserByIdController
} = require("./get-admin-user-by-id");

const {
    updateAdminUserByIdSchema,
    updateAdminUserByIdController
} = require("./update-admin-user-by-id");

exports.adminUserSchema = `
${deleteAdminUserByIdSchema}
${getAdminUserByIdSchema}
${getAdminAllUserSchema}
${updateAdminUserByIdSchema}
  
  `;

exports.adminUserController = merge({},
    deleteAdminUserByIdController,
    getAdminUserByIdController,
    getAdminAllUserController,
    updateAdminUserByIdController,
);
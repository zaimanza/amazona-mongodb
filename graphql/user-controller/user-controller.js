const {
    merge,
} = require('lodash');

const {
    addManyUserSchema,
    addManyUserController
} = require("./add-many-user");

const {
    addOneUserSchema,
    addOneUserController
} = require("./add-one-user");

const {
    getOneUserSchema,
    getOneUserController
} = require("./get-one-user");

const {
    getManyUserSchema,
    getManyUserController
} = require("./get-many-user");

const {
    userLoginSchema,
    userLoginController
} = require("./user-login");

exports.userSchema = `
    ${addManyUserSchema}
    ${addOneUserSchema}
    ${getOneUserSchema}
    ${getManyUserSchema}
    ${userLoginSchema}
  
  `;

exports.userController = merge({},
    addManyUserController,
    addOneUserController,
    getOneUserController,
    getManyUserController,
    userLoginController,
);
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

const {
    userRegisterSchema,
    userRegisterController
} = require("./user-register");

const {
    userUpdateSchema,
    userUpdateController
} = require("./user-update");

exports.userSchema = `
    ${addManyUserSchema}
    ${addOneUserSchema}
    ${getOneUserSchema}
    ${getManyUserSchema}
    ${userLoginSchema}
    ${userRegisterSchema}
    ${userUpdateSchema}
  
  `;

exports.userController = merge({},
    addManyUserController,
    addOneUserController,
    getOneUserController,
    getManyUserController,
    userLoginController,
    userRegisterController,
    userUpdateController,
);
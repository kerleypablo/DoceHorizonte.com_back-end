"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const main_1 = require("./main");
const loginMiddlewear_1 = require("../middleware/loginMiddlewear");
const user = (0, express_1.Router)();
user.post('/login', loginMiddlewear_1.default.login, main_1.userController.Autenticate);
user.get('/login/validate', main_1.userController.Validate);
exports.default = user;
//# sourceMappingURL=userRouter.js.map
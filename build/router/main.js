"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userController_1 = require("../controller/userController");
const Userservices_1 = require("../services/Userservices");
const userServices = new Userservices_1.default();
exports.userController = new userController_1.default(userServices);
exports.default = { userController: exports.userController };
//# sourceMappingURL=main.js.map
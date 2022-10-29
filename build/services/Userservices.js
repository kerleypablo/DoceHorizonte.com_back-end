"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TokenServices_1 = require("../utils/TokenServices");
const userModel_1 = require("../database/models/userModel");
const DecrryptPassword_1 = require("../middleware/DecrryptPassword");
class UserServices {
    constructor() {
        this.tokenServices = new TokenServices_1.default();
    }
    static async Autenticate(login) {
        const email = login.email;
        const user = await userModel_1.default.findOne({ where: { email }, });
        const result = await DecrryptPassword_1.default.decrypt(login.password, user.password);
        if (!result)
            return false;
        return true;
    }
    async getUserByemail(email) {
        const user = await userModel_1.default.findOne({
            where: { email },
        });
        return user;
    }
    generateToken(user) {
        const token = this.tokenServices.tokenGenerate({ email: user.email, password: user.password });
        return token;
    }
    async verifyToken(token) {
        const result = await this.tokenServices.tokenAutenticate(token);
        if (!result || null) {
            return false;
        }
        return true;
    }
}
exports.default = UserServices;
//# sourceMappingURL=Userservices.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LoginValidateSchema_1 = require("../schema/LoginValidateSchema");
const TokenServices_1 = require("../utils/TokenServices");
class ValidateLogin {
    constructor() {
        this.tokenServices = new TokenServices_1.default();
        this.verifyToken = async (req, res, next) => {
            const token = req.headers.authorization;
            if (!token)
                return res.status(400).json({ message: 'No token was found' });
            const result = await this.tokenServices.tokenAutenticate(token);
            if (!result || null) {
                return res.status(401).json({ message: 'Token must be a valid token' });
            }
            return next();
        };
    }
    static login(req, res, next) {
        const { error } = LoginValidateSchema_1.default.validate(req.body);
        if (error) {
            return res.status(400).json({ message: error.message });
        }
        next();
    }
}
exports.default = ValidateLogin;
//# sourceMappingURL=loginMiddlewear.js.map
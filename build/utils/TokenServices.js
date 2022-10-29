"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = process.env;
const config = {
    expiresIn: '1d',
    algorithm: 'HS256',
};
class TokenServices {
    constructor(jwtconfig) {
        this.jwtconfig = jwtconfig;
        this.jwt = jwt;
        if (!jwtconfig) {
            this.jwtconfig = config;
        }
    }
    async tokenGenerate(payload) {
        return this.jwt.sign(payload, JWT_SECRET, this.jwtconfig);
    }
    async tokenAutenticate(token) {
        const verify = this.jwt.decode(token);
        return verify;
    }
}
exports.default = TokenServices;
//# sourceMappingURL=TokenServices.js.map
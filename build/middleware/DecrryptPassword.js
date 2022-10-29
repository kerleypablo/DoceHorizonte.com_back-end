"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt = require("bcryptjs");
class DecryptPassword {
    static async decrypt(password, hash) {
        const comparison = await bcrypt.compare(password, hash).then((res) => res);
        return comparison;
    }
}
exports.default = DecryptPassword;
//# sourceMappingURL=DecrryptPassword.js.map
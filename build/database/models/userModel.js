"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: (0, sequelize_1.STRING)(60),
        allowNull: false,
    },
    email: {
        type: (0, sequelize_1.STRING)(100),
        allowNull: false,
    },
    password: {
        type: (0, sequelize_1.STRING)(100),
        allowNull: false,
    },
    type: {
        type: (0, sequelize_1.STRING)(15),
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = User;
//# sourceMappingURL=userModel.js.map
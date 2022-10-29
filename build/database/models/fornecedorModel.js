"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = require(".");
class Fornecedor extends sequelize_1.Model {
}
Fornecedor.init({
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
    logo: {
        type: (0, sequelize_1.STRING)(100),
        allowNull: false,
    },
}, {
    sequelize: _1.default,
    modelName: 'fornecedores',
    timestamps: false,
});
exports.default = Fornecedor;
//# sourceMappingURL=fornecedorModel.js.map
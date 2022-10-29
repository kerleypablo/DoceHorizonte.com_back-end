"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const fornecedorModel_1 = require("./fornecedorModel");
const _1 = require(".");
class Insumo extends sequelize_1.Model {
}
Insumo.init({
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
    marca: {
        type: (0, sequelize_1.STRING)(60),
        allowNull: false,
    },
    fornecedor: {
        type: sequelize_1.INTEGER,
        allowNull: false,
    },
    valor: {
        type: (0, sequelize_1.DECIMAL)(10.2),
        allowNull: false,
    },
    quantidade: {
        type: (0, sequelize_1.DECIMAL)(10.2),
        allowNull: false,
    },
    unidade: {
        type: (0, sequelize_1.STRING)(3),
        allowNull: false,
    },
    ultimoPreco: {
        type: (0, sequelize_1.DECIMAL)(10.2),
        allowNull: true,
    },
    img: {
        type: (0, sequelize_1.STRING)(150),
        allowNull: true,
    },
}, {
    underscored: true,
    sequelize: _1.default,
    modelName: 'insumos',
    timestamps: false,
});
fornecedorModel_1.default.hasMany(Insumo);
Insumo.belongsTo(fornecedorModel_1.default);
exports.default = Insumo;
//# sourceMappingURL=insumoModel.js.map
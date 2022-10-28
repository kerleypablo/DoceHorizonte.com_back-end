import { Model, INTEGER, STRING, DECIMAL } from 'sequelize';
import Fornecedor from './fornecedorModel';
import db from '.';

class Insumo extends Model {
  declare id: number;
  declare name: string;
  declare marca: string;
  declare fornecedor: number;
  declare valor: number;
  declare quantidade: number;
  declare unidade: string;
  declare ultimoPreco: number;
  declare img: string;
}

Insumo.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING(60),
    allowNull: false,
  },
  marca: {
    type: STRING(60),
    allowNull: false,
  },
  fornecedor: {
    type: INTEGER,
    allowNull: false,
  },
  valor: {
    type: DECIMAL(10.2),
    allowNull: false,
  },
  quantidade: {
    type: DECIMAL(10.2),
    allowNull: false,
  },
  unidade: {
    type: STRING(3),
    allowNull: false,
  },
  ultimoPreco: {
    type: DECIMAL(10.2),
    allowNull: true,
  },
  img: {
    type: STRING(150),
    allowNull: true,
  },


}, {
  underscored: true,
  sequelize: db,
  modelName: 'insumos',
  timestamps: false,
});

Fornecedor.hasMany(Insumo);
Insumo.belongsTo(Fornecedor);

export default Insumo;
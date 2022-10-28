import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class Fornecedor extends Model {
  declare id: number;
  declare name: string;
  declare logo: string;
}

Fornecedor.init({
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
  logo: {
    type: STRING(100),
    allowNull: false,
  },

}, {
  sequelize: db,
  modelName: 'fornecedores',
  timestamps: false,
});

export default Fornecedor;
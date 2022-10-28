import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class User extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare type: string;
}

User.init({
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
  email: {
    type: STRING(100),
    allowNull: false,
  },
  password: {
    type: STRING(100),
    allowNull: false,
  },
  type: {
    type: STRING(15),
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'users',
  timestamps: false,
});

export default User;
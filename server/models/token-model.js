import { Sequelize, DataTypes } from 'sequelize';
const sequelize = new Sequelize({
  dialect: 'postgres',
  database: 'node_postgres',
  user: 'Shokhrukh',
  password: 'Yfrkflyfz!rfkmvfh7',
  host: 'localhost',
  port: 5432,
  ssl: true,
  clientMinMessages: 'notice',
});

export const Token = sequelize.define('Token', {
  user: { type: DataTypes.STRING, ref: 'User' },
  refreshToken: { type: DataTypes.STRING, required: true },
});

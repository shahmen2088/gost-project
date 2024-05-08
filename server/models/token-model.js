import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory');

export const Token = sequelize.define('Token', {
  user: { type: String, ref: 'User' },
  refreshToken: { type: String, required: true },
});

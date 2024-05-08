import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize('sqlite::memory');

export const User = sequelize.define('User', {
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  isActivated: { type: Boolean, default: false },
  activateLinl: { type: String },
});

await sequelize.sync();

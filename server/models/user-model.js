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

export const User = sequelize.define('User', {
  email: { type: DataTypes.STRING, unique: true, required: true },
  password: { type: DataTypes.STRING, required: true },
  isActivated: { type: DataTypes.BOOLEAN, default: false },
  activateLink: { type: DataTypes.STRING },
});

// await sequelize.sync();

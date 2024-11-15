import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('adminjs', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('google-docs', 'root', '@bhiyadav141', {
    host: 'localhost',
    dialect: 'mysql',
    // logging: false,
    operatorsAliases: false
});

export default sequelize;
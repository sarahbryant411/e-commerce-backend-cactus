const Sequelize = require('sequelize');
require('dotenv').config();

const sequilize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);

module.exports = sequilize;


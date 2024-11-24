// Call 'sequelize' to connect and make changes to the database. Everything that involves the database will be via 'sequelize'.
// 'sequelize' is an application for using Relational databases with Node.js (Example of databases that can be used with 'Sequelize': Postgress, SQLite, MySQL)

const Sequelize = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './db/app.db'
})  // Database connection

module.exports = sequelize; // Export the database connection.
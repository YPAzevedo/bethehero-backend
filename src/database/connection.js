const knex = require("knex");
const config = require("../../knexfile");

// choosing the enviroment connection as development
const connection = knex(config.development);

module.exports = connection;

// Load the Platform.sh configuration
var config= require("platformsh").config();

var db = config.relationships.database[0];

module.exports = {
  development: {
    username: "dev",
    password: "dev",
    database: "node_sequelize",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  test: {
    username: "test",
    password: "test",
    database: "node_sequelize",
    host: "127.0.0.1",
    dialect: "postgres"
  },
  production: {
    username: db.username,
    password: db.password,
    database: db.path,
    host: db.host,
    port: db.port,
    dialect: "postgres"
  }
}

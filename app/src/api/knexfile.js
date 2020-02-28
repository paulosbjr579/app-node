// Update with your config settings.

module.exports = {
    client: 'mysql',
    connection: {
      database: 'bhut',
      user:     'root',
      password: 'root',
      host: 'mysql-db-node'
    },

    migrations: {
      tableName: 'knex_migrations'
    }
};

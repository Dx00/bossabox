// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'bossabox',
      user : 'root',
      password: 'password',
      filename: './src/database/db.mysql',
    },
    migrations: {
      directory: './src/database/migrate',
    },
  },

  staging: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

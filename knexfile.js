// Update with your config settings.

const client = process.env.DATABASE || "postgresql";

const connection = {
  database: process.env.DB_NAME || "wejha",
  user: process.env.DB_USER || "user" , 
  password: process.env.DB_PASS || "password",
  host: process.env.DB_HOST || "localhost"
}

module.exports = {

  testing: {
    client: process.env.DATABASE || "postgresql",
    connection: {
      host: process.env.DB_HOST || "localhost",
      database: process.env.DB_NAME || "testing",
      user: process.env.DB_USER || "user",
      password: process.env.DB_PASS || "password"
    }
  },

  development: {
    client,
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  staging: {
    client,
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client,
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

exports.up = function(knex) {
    return knex.schema
    .createTable("users", (table) => {
        table.increments("id").primary()
		table.string("username")
		table.string("password")
		table.string("email")
		table.enum("status", ["active", "banned", "unverified"])
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("users")
  };
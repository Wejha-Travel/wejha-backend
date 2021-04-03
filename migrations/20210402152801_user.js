exports.up = function(knex) {
    return knex.schema
    .createTable("users", (table) => {
        table.increments("id").primary()
		table.string("first_name")
		table.string("last_name")
		table.string("password")
		table.string("email").unique()
		table.enum("status", ["active", "banned", "unverified"])
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("users")
  };
exports.up = function(knex) {
    return knex.schema
    .createTable("admins", (table) => {
        table.increments("id").primary()
		table.string("email")
		table.string("password")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("admins")
  };
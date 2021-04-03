exports.up = function(knex) {
    return knex.schema
    .createTable("minidrivers", (table) => {
        table.increments("id").primary()
		table.string("email")
		table.string("password")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("minidrivers")
  };
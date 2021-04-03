exports.up = function(knex) {
    return knex.schema
    .createTable("minidriver_details", (table) => {
        table.increments("id").primary()
		table.string("first_name")
		table.string("last_name")
		table.string("registeration_number")
		table.integer("driver_id")
        table.foreign("driver_id").references("minidrivers.id")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("minidriver_details")
  };
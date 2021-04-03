exports.up = function(knex) {
    return knex.schema
    .createTable("commutesurveys", (table) => {
        table.increments("id").primary()
		table.string("name")
		table.integer("arrival_time")
		table.integer("departure_time")
		table.string("notes")
		table.string("frequency")
		table.integer("user_id")
		table.jsonb("source")
		table.jsonb("destination")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("commutesurveys")
  };
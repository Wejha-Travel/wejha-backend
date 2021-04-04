exports.up = function(knex) {
    return knex.schema
    .createTable("commute_requests", (table) => {
        table.increments("id").primary()
		table.jsonb("source")
		table.jsonb("destination")
		table.datetime("timestamp")
		table.enum("status", ["waiting", "pickedup", "cancelled", "enroute"])
		table.integer("user_id")
		table.integer("driver_id")
    })
  };
  
  exports.down = function(knex) {
      return knex.schema
      .dropTable("commute_requests")
  };
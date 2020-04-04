
exports.up = function(knex) {
  return (knex.schema.createTable('users', function(table){
      table.increments();
      table.string('tool').notNullable();
      table.string('tool_link').notNullable();
      table.string('description_tool').notNullable();
      table.string('tag').notNullable();
  }));
};

exports.down = function(knex) {
    return knex.schema.dropTable('users');
};
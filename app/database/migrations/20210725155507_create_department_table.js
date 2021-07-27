
exports.up = function(knex) {
  
    return knex.schema.createTable('department', function(table) {
        table.increments('id');
        table.string('name', 150).notNullable().unique().comment('Наименование института');
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('department');
};


exports.up = function(knex) {

    return knex.schema.createTable('hostel', function(table) {
        table.increments('id');
        table.string('name', 35).notNullable().comment('Наименование общежития');
        table.integer('id_department').unsigned().comment('Внешний ключ института к которому он относится');
        table.timestamp('created_at').defaultTo(knex.fn.now());
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('hostel');
};

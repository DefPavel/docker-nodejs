
exports.up = function(knex) {
    return knex.schema.createTable('section', function(table) {
        table.increments('id');
        table.string('name', 35).notNullable().comment('Наименование секции');
        table.integer('id_hostel').unsigned().comment('Внешний ключ общежития к которому секция относится');
        table.timestamp('created_at').defaultTo(knex.fn.now());

        // Внешний ключ
        table.foreign('id_hostel')
            .references('hostel.id')
            .onUpdate('Cascade')
            .onDelete('Cascade');

      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('section');
};

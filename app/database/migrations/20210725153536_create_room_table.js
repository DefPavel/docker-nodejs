
exports.up = function(knex) {

    return knex.schema.createTable('room', function(table) {
        table.increments('id');
        table.string('name', 20).notNullable().comment('Наименование комнаты');
        table.integer('id_section').unsigned().comment('Внешний ключ секции к которой относится комната');
        table.timestamp('created_at').defaultTo(knex.fn.now());

        // Внешний ключ
        table.foreign('id_section')
            .references('section.id')
            .onUpdate('Cascade')
            .onDelete('Cascade');

      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('room');
};

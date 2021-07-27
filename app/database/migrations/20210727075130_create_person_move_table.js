
exports.up = function(knex) {
  
    return knex.schema.createTable('person_move', function(table) {
        
        table.increments('id');
        table.integer('id_card').unsigned().comment('Внешний ключ персоны');
        table.datetime('time_move').defaultTo(knex.fn.now()).comment('Дата и время прохождения');

        table.foreign('id_card')
        .references('person_card.id')
        .onUpdate('Cascade')
        .onDelete('Cascade');


      });
};

exports.down = function(knex) {
  return knex.schema.dropTable('person_move');
};

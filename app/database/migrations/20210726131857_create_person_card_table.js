
exports.up = function(knex) {
  
    return knex.schema.createTable('person_card', function(table) {
        
        table.increments('id');
        table.integer('id_person').unsigned().comment('Внешний ключ персоны');
        table.integer('code', 8).notNullable().comment('Номер пропуска');
        table.enu('status_card', ['T', 'F','B']).notNullable().defaultTo('F').comment('Статус пропуска : T - Зашел ; F - Вышел ; B - Заблокирован');


        table.foreign('id_person')
        .references('persons.id')
        .onUpdate('Cascade')
        .onDelete('Cascade');


      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('person_card');
};

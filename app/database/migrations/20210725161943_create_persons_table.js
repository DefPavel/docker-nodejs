
exports.up = function(knex) {

    return knex.schema.createTable('persons', function(table) {
        table.increments('id');
        table.string('firstName', 100).notNullable().comment('Фамилия');
        table.string('middleName', 100).notNullable().comment('Имя');
        table.string('lastName', 100).notNullable().comment('Отчество');
        table.integer('id_cont').comment('id в Контигемусе');

      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('persons');
};

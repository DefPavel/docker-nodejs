
exports.up = function(knex) {

    return knex.schema.createTable('persons', function(table) {
        table.increments('id');
        table.string('firstName', 100).notNullable().comment('Фамилия');
        table.string('middleName', 100).notNullable().comment('Имя');
        table.string('lastName', 100).notNullable().comment('Отчество');
        table.datetime('birthday').notNullable().comment('Дата рождения');
        table.string('photo_url',250).notNullable().defaultTo('http://localhost/assets/img/no-photo.jpg').comment('URL фото');


        table.integer('id_cont').comment('id в Контигемусе');
        table.integer('id_pers').comment('id в Персонели');

      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('persons');
};

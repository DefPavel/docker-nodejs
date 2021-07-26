
exports.up = function(knex) {

    return knex.schema.createTable('persons', function(table) {
        table.increments('id');
        table.string('firstName', 100).notNullable().comment('Фамилия');
        table.string('middleName', 100).notNullable().comment('Имя');
        table.string('lastName', 100).notNullable().comment('Отчество');
        table.datetime('birthday').notNullable().comment('Дата рождения');
        table.string('photo_url',500).notNullable().defaultTo('http://localhost/assets/img/no-photo.jpg').comment('URL фото');
        table.enu('status_person', ['S', 'W', 'I']).notNullable().comment('S - Студент, W - Сотрдуник , I - Переселенец');
        table.datetime('date_settling').defaultTo(knex.fn.now());
        table.datetime('date_eviction');


        table.integer('id_cont').comment('id в Контигемусе');
        table.integer('id_pers').comment('id в Персонели');

      })
};

exports.down = function(knex) {
  return knex.schema.dropTable('persons');
};

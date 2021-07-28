
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('room').del()
    .then(function () {
      // Inserts seed entries
      return knex('room').insert([
        {id: 1, id_section: 1, name: '101'},
        {id: 2, id_section: 1, name: '102'},
        {id: 3, id_section: 1, name: '103'},
        {id: 4, id_section: 1, name: '104'},
      ]);
    });
};

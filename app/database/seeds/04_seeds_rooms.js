
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('room').del()
    .then(function () {
      // Inserts seed entries
      return knex('room').insert([
        {id: 1,id_section: 1, name: '101'},
      ]);
    });
};

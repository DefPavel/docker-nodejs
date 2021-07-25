
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('section').del()
    .then(function () {
      // Inserts seed entries
      return knex('section').insert([
        {id: 1, id_hostel: 1, name: 'Этаж 1'},
      ]);
    });
};

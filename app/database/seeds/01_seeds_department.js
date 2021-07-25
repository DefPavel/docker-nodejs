
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('department').del()
    .then(function () {
      // Inserts seed entries
      return knex('department').insert([
        {id: 1, name: 'ИИМОСП'},
        {id: 2, name: 'ИПП'},
        {id: 3, name: 'ИФМОИОТ'},
        {id: 4, name: 'ФМХО'},
        {id: 5, name: 'ИФВС'},
        {id: 6, name: 'ФФ'},
      ]);
    });
};

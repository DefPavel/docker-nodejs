
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('person_card').del()
    .then(function () {
      // Inserts seed entries
      return knex('person_card').insert([
        {id: 1,id_person: 1, id_room: 1, code: 12345678 , status_card: 'F'},
        {id: 2,id_person: 2, id_room: 1, code: 12312333 , status_card: 'F'},
        {id: 3,id_person: 3, id_room: 2, code: 99999999 , status_card: 'F'},
      ]);
    });
};

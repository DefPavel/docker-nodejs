
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('hostel').del()
    .then(function () {
      // Inserts seed entries
      return knex('hostel').insert([
        {id: 1, id_department: 4, name: 'Общежитие №2'},
        {id: 2, id_department: 1, name: 'Общежитие №3'},
        {id: 3, id_department: 3, name: 'Общежитие №4'},
        {id: 4, id_department: 2, name: 'Общежитие №5'},
        {id: 5, id_department: 3, name: 'Общежитие №7'},

      ]);
    });
};

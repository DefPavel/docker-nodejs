
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('persons').del()
    .then(function () {
      // Inserts seed entries
      return knex('persons').insert([
        {id: 1, firstName: 'Спарда' , middleName: 'Вергилий', lastName: 'Спартакович', birthday: '1998.07.12', status_person: 'S'},
        {id: 2, firstName: 'Вольков' , middleName: 'Виталик', lastName: 'Витальевич', birthday: '1998.07.12', status_person: 'S'},
        {id: 3, firstName: 'Спалахуч' , middleName: 'Владимир', lastName: 'Станиславович', birthday: '1998.07.12', status_person: 'S'},
      ]);
    });
};

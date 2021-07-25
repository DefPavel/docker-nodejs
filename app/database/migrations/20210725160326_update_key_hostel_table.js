
exports.up = function(knex) {
  
    return knex.schema.alterTable('hostel', function(table) {
        // Внешний ключ
        table.foreign('id_department')
            .references('department.id')
            .onUpdate('Cascade')
            .onDelete('Cascade');

      });
};

exports.down = function(knex) {
    return knex.schema.alterTable('hostel', function(table) {
        table.dropForeign('id_department');
    
        table.foreign('id_department')
          .references('department.id')
          .onDelete('NO ACTION');
      });
};

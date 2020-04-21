
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function(t){
      t.string('id').primary();
      t.string('name').notNullable();
      t.string('email').notNullable();
      t.string('whatsapp').notNullable();
      t.string('cidade').notNullable();
      t.string('uf').notNullable();


  })
};

exports.down = function(knex) {
  knex.schema.dropTable('ongs');
};


/**
 * cria o arquivo knexfile.js: npx knex init
 * 
 * cria migration: npx knex migrate:make minha_migration 
 * 
 * roda migration: npx knex migrate:latest (express.up())
 * 
 * cancela migration: npx knex migrate:rollback (express.down())
 * 
 * migrations executadas: npx knex migrate:status
 * */

exports.up = function(knex) {
    return knex.schema.createTable('incidents', function(t){
        t.increments();
        t.string('title').notNullable();
        t.string('description').notNullable();
        t.decimal('value').notNullable();
  
        t.string('id_ong').notNullable();
        t.foreign('id_ong').references('id').inTable('ongs')

    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents')
};

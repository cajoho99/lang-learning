/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
  return knex.schema.createTable('words', (table) => {
    table.increments();
    table.string('user').unique().notNullable();
    table.date('word').notNullable();
    table.integer('repetitions').notNullable();
    table.integer('interval').notNullable();
    table.float('efactor').notNullable();
   }); 
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
  return knex.schema.dropTable('words')
}

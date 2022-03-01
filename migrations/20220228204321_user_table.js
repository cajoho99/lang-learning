/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export async function up(knex) {
  return knex.schema.createTable('users', (table) => {
    table.uuid('id').notNullable().unique();
    table.string('username').notNullable().unique();
   });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export async function down(knex) {
  return knex.schema.dropTable('users')

};

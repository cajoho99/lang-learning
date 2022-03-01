/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export async function up(knex) {
  return knex.schema.alterTable('words', (table) => {
    table.uuid('userId').references('id').inTable('users').onDelete('CASCADE').alter();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 export async function down(knex) {
  return knex.schema.alterTable('words', (table) => {
    table.uuid('userId').alter();
  });

};

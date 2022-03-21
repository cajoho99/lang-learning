/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	return knex.schema.alterTable('words', (table) => {
		table.string('translation');
		table.string('wordId');
	});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
	return knex.schema.alterTable('words', (table) => {
		table.dropColumn('translation');
		table.dropColumn('wordId');
	});
}

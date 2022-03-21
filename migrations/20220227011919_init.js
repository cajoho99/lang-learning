/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
	return knex.schema.createTable('words', (table) => {
		table.uuid('userId'); //references('id').inTable('users').onDelete('CASCADE');
		table.string('word').notNullable();
		table.string('language').notNullable();
		table.integer('repetitions').notNullable();
		table.integer('interval').notNullable();
		table.float('efactor').notNullable();
		table.unique(['word', 'userId', 'language']);
	});
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
	return knex.schema.dropTable('words');
}

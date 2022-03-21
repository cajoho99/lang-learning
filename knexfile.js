// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
export default {
	development: {
		client: 'pg',
		connection: {
			host: 'db',
			database: process.env.POSTGRES_DB || 'langlearning',
			user: process.env.POSTGRES_USER || 'postgres',
			password: process.env.POSTGRES_PASSWORD || 'passwd'
		},
		pool: {
			min: 2,
			max: 50
		},
		migrations: {
			directory: './migrations'
		}
	}
	// ,
	// production: {
	//   client: 'postgresql',
	//   connection: {
	//     database: 'my_db',
	//     user:     'username',
	//     password: 'password'
	//   },
	//   pool: {
	//     min: 2,
	//     max: 10
	//   },
	//   migrations: {
	//     tableName: 'knex_migrations'
	//   }
	// }
};

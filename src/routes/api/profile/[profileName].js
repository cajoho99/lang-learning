import { v4 as uuidv4 } from 'uuid';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(context) {
	const DBResult = await context.locals.db
		.insert({ id: uuidv4(), username: context.params.profileName })
		.into('users');
	console.log('DBRES:', DBResult);
	return {
		status: 200
	};
}

export async function get(context) {
	console.log('Username', context.params.profileName);
	const res = await context.locals.db
		.select('*')
		.from('users')
		.where({ username: context.params.profileName });

	console.log(res);
	return {
		status: 200,
		body: res
	};
}

// return {
//   status: 404
// };

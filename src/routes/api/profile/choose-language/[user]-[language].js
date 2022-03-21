import { getLanguage } from '$lib/language-json-supplier';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(context) {
	// const DBResult  = await context.locals.db.insert({id: uuidv4(), username: context.params.profileName}).into('users');
	const language_json = await getLanguage(context.params.language);

	const user_id = await context.locals.db
		.select('id')
		.from('users')
		.where({ username: context.params.user });

	let db_rows = [];
	console.log(language_json.words[0]);
	language_json.words.forEach(({ polish, english, id }) => {
		db_rows.push({
			userId: user_id[0].id,
			word: polish,
			translation: english,
			wordId: id,
			language: context.params.language,
			interval: 0,
			repetitions: 0,
			efactor: 0
		});
	});

	//console.log('db_rows', db_rows);

	const res = await context.locals.db.insert(db_rows).into('words');
	return {
		status: 200,
		body: res
	};

	// return {
	//   status: 404
	// };
}

import getRandom from '$lib/word-selection/get-random-word';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function get({ params, locals }) {
	// `params.id` comes from [id].js
	const randomWordObject = await getRandom(locals.db, params.language, params.user);

	console.log('Word object', randomWordObject);

	return {
		status: 200,
		body: randomWordObject
	};

	// return {
	//   status: 404
	// };
}

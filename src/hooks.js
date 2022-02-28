import { getDb } from './lib/db';


/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
	event.locals.db = getDb();
	const response = await resolve(event);
	return response;
}

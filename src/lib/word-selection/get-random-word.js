export default async function getRandom(db, language, user) {
	// get user id
	const user_id = (await db.select('id').from('users').where({ username: user }))[0].id;
	// get all words for language and user

	const words = await db
		.select('word', 'translation')
		.from('words')
		.where({ userId: user_id, language: language });

	// choose random word
	const numberOfWords = words.length;
	const randomIndex = Math.floor(Math.random() * numberOfWords);

	// return the word object
	return words[randomIndex];
}

import path from 'path';
import fs from 'fs';
import { validate } from 'uuid';

const languageDir = path.join(process.cwd(), 'static', 'language-files');

export const getAllJsonFileNames = async () => {
	return await fs.readdirSync(languageDir, function (err, files) {
		if (err) {
			return console.log('Unable to scan directory: ' + err);
		}
		// files.forEach(function (file) {
		//     console.log(file);
		// });
		return files;
	});
};

export const getLanguage = async (name) => {
	let allFiles = await getAllJsonFileNames();
	if (allFiles.indexOf(name + '.json') > -1) {
		const data = await fs.readFileSync(languageDir + '/' + name + '.json');
		const obj = JSON.parse(data);
		if (!validateLanguageJson(obj)) {
			console.error('JSON NOT VALIDATED:');
		}
		return obj;
	}

	return console.error('Language: ' + name + 'does not exist');
};

export const validateLanguageJson = async ({ words }) => {
	console.log('validating json', '\n----------------------------------------');
	const wordSet = new Set();
	const hasNoDuplicates = words.every((word) => {
		if (wordSet.has(word.polish)) {
			console.log('Found duplicate:', word);
			return true;
		} else {
			wordSet.add(word.polish);
			return true;
		}
	});
	return hasNoDuplicates;
};

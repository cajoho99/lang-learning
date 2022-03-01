import {v4 as uuidv4} from 'uuid';
import {getAllJsonFileNames, getLanguage} from '$lib/language-json-supplier'

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(context) {

  // const DBResult  = await context.locals.db.insert({id: uuidv4(), username: context.params.profileName}).into('users');
  console.log("DBRES:", await getLanguage(context.params.name));
  return {
    status: 200
  };
 
  // return {
  //   status: 404
  // };
};
import {v4 as uuidv4} from 'uuid';

/** @type {import('@sveltejs/kit').RequestHandler} */
export async function post(context) {
  const DBResult  = await context.locals.db.insert({id: uuidv4(), username: context.params.profileName}).into('users');
  console.log("DBRES:", DBResult);
  return {
    status: 200
  };
 
  // return {
  //   status: 404
  // };
};
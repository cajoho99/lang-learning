/** @type {import('@sveltejs/kit').RequestHandler} */
export async function put(context) {
  // `params.id` comes from [id].js
  console.log(context.locals.db.tables("langlearning"))
  return {
    status: 200
  };
 
  // return {
  //   status: 404
  // };
};
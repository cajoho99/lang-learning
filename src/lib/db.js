import * as Knex from 'knex';
import knexfile from '../../knexfile';

let connection = undefined;

export function getDb() {
  if (connection == undefined) {
    connection = connectToDb();
  }
  return connection;
}

function connectToDb() {
 connection = Knex.default(
  process.env.NODE_ENV === 'production'
   ? knexfile.production
   : knexfile.development
 );
 return connection;
}
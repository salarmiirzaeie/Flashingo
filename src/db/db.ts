import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {VocabularyItem} from './types';

enablePromise(true);
const dbName = 'vocabs-db';
const tableName = 'basic-words';

export let db: SQLiteDatabase;

export const getDBConnection = async () => {
  return openDatabase(
    {
      name: dbName,
      createFromLocation: '~vocabs-db.db',
    },
    () => console.log('Database opened'),
    error => console.log('SQLite error: ' + error.message),
  );
};
// export const getDBConnection = () => {
//   db = openDatabase(
//     {
//       name: dbName,
//       createFromLocation: '~vocabs-db.db',
//     },
//     () => console.log('Database opened'),
//     error => console.log('SQLite error: ' + error.message), // Corrected error handling
//   );
// };

export const getWords = async (
  db: SQLiteDatabase,
): Promise<VocabularyItem[]> => {
  try {
    const todoItems: VocabularyItem[] = [];
    const results = await db.executeSql(`SELECT * FROM [${tableName}]`);
    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    console.error(error);
    throw Error('Failed to get todoItems !!!');
  }
};

import {db} from './db';
import {VocabularyItem} from './types';

export const insertData = (data: VocabularyItem[]) => {
  db.transaction(tx => {
    data.forEach(item => {
      tx.executeSql(
        `INSERT INTO vocabulary (word, translate, pronunciation, example1, example2) VALUES (?, ?, ?, ?, ?);`,
        [
          item.word,
          item.translate,
          item.pronunciation,
          item.example1,
          item.example2,
        ],
        (tx, results) => console.log('Word inserted:', item.word),
        error => console.log('SQLite error:', error),
      );
    });
  });
};

export const loadAndInsertData = async () => {
  try {
    const response = require('./data/basicWords.json');
    // const data = await response.json();
    console.log(response);
    console.log('656565');
    insertData(response);
  } catch (error) {
    console.error('Error loading JSON:', error);
  }
};
export const incrementLearnCount = (id: number) => {
  db.transaction(tx => {
    tx.executeSql(
      `UPDATE vocabulary SET learn_count = learn_count + 1 WHERE id = ?;`,
      [id],
      (tx, results) => {
        console.log('Learn count incremented for id:', id);
      },
      error => {
        console.log('SQLite error:', error);
      },
    );
  });
};
export const decrementLearnCount = (id: number) => {
  db.transaction(tx => {
    tx.executeSql(
      `UPDATE vocabulary SET learn_count = learn_count - 1 WHERE id = ?;`,
      [id],
      (tx, results) => {
        console.log('Learn count decremented for id:', id);
      },
      error => {
        console.log('SQLite error:', error);
      },
    );
  });
};

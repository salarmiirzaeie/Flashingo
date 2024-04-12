import {View, Text} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import MainProvider from './src/providers/main-provider';
import RootNavigation from './src/routes/root-navigation/root-navigation';
import {getDBConnection, getWords} from './src/db/db';
import {loadAndInsertData} from './src/db/actions';

const App = () => {
  const connectToDB = useCallback(async () => {
    const db = await getDBConnection();
    const storedTodoItems = await getWords(db);
    console.log(storedTodoItems);
  }, []);

  useEffect(() => {
    connectToDB();
    // loadAndInsertData();
  }, [connectToDB]);

  return (
    <MainProvider>
      <RootNavigation />
    </MainProvider>
  );
};

export default App;

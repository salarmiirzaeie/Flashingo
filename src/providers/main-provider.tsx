import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import Tts from 'react-native-tts';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '../config/gluestack-ui.config';
import {persistor, store} from '../stores/store';

interface Props {
  children: React.ReactNode;
}
const MainProvider: React.FC<Props> = ({children}) => {
  Tts.setDefaultLanguage('de-DE');
  Tts.setDefaultRate(0.5);
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </GluestackUIProvider>
  );
};

export default MainProvider;

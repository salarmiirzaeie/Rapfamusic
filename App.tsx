import React, {useEffect, useState} from 'react';
import {NativeBaseProvider, Text, View} from 'native-base';
import {Provider} from 'react-redux';
import {persistor, store} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import Navigation from './src/navigation/Navigation';
import {theme} from './src/theme/theme';

const App = () => {
  return (
    <NativeBaseProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navigation />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  );
};

export default App;

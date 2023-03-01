/* ------------------------------ Basic imports ----------------------------- */
import React from 'react';
/* ------------------------------ Navigation ----------------------------- */
import {NavigationContainer} from '@react-navigation/native';
import RootNavigation from './src/navigation/rootNavigation';
import {Provider} from 'react-redux';
import store from './src/redux/store';

function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
}

export default App;

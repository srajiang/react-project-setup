import React from 'react';
import { Provider as StoreProvider } from 'react-redux';
import App from './App';

const Root = ({store}) => (
  <StoreProvider store={store}>
    <App/>
  </StoreProvider>
)

export default Root
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
import theme from './Theme';
import { Reset } from 'styled-reset';

import Home from './pages/Home';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </Provider>
  );
}

export default App;

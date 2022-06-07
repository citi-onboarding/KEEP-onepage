import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Portfolio } from './pages';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Portfolio/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

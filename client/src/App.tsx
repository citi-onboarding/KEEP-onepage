import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Navbar } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

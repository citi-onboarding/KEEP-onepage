import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages';
import { AboutUs } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <AboutUs/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

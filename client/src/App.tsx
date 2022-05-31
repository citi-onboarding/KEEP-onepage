import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home } from './pages/home';
import { Contact } from './pages/contact';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
      <Contact/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

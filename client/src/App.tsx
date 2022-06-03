import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Contact } from './pages/contact';
import { Navbar } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Contact/>
      <Navbar/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

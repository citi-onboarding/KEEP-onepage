import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Home, Footer } from './pages';

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <Home/>
      <GlobalStyle/>
    </ThemeProvider>

    <Footer/>
    </>
    
  );
}

export default App;

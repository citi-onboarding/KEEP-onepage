import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';


import { Footer } from './pages';
import { Contact } from './pages/contact';
import { Navbar } from './pages';

function App() {
  return (
  
    <ThemeProvider theme={theme}>
      <Footer/>
      <Contact/>
      <Navbar/>
      <GlobalStyle/>
    </ThemeProvider>
    
  );
}

export default App;

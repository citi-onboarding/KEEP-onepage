import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { Banner } from './pages';
import { Footer } from './pages';
import { Contact } from './pages/contact';
import { Navbar } from './pages';
import { AboutUs } from './pages';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Banner/>
      <AboutUs/>
      <Contact/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
    
  );
}

export default App;

import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';



import { Portfolio } from './pages';
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
      <Portfolio/>
      <Contact/>
      <Footer/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

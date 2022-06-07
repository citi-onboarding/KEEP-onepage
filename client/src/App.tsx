import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/global';

import { AboutUs } from './pages/aboutus';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <AboutUs/>
      <GlobalStyle/>
    </ThemeProvider>
  );
}

export default App;

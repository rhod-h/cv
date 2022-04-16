import * as React from 'react';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import Styles from './App.module.css';
import Header from './Components/Header';
import Intro from './Components/Intro';

import Hat from './Resources/Hat.jpeg';
import Content from './Resources/Content.json';
import GlobalStyle from './globalStyle';

const theme = createTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={Styles.background}>
        <div className={Styles.app}>
          <Header profilePic={Hat} name={Content.header.name} links={Content.header.links} />
          <Intro title="About Me" summary={Content.aboutMe} />
        </div>
      </div>
    </ThemeProvider>
  );
}

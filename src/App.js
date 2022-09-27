import { Fragment, useState, useEffect } from 'react';
import {  Route, Routes } from 'react-router-dom'; 

import { CssBaseline,  GlobalStyles, createTheme, Box } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { globalStyle } from './styles/styles';
import { PageProvider } from './contexts/Page.context';
import { LangProvider } from './contexts/Lang.context';
import Navbar from './components/navbar/Navbar.component';
import Home from './pages/home.page';
import Portfolio from './pages/portfolio.page';
import PortfolioView from './pages/portfolioView.page';
import CV from './pages/cv.page';
import getDesignTokens from './contexts/Theme.context';
// import Testing from './pages/testing.page';
import PageNotFound from './pages/pagenotfound.page';


import './App.css';

const App = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [ isDarkMode, setIsDarkMode ] = useState(prefersDarkMode);
  const switchMode = props => (setIsDarkMode(!isDarkMode));
  const theme = createTheme(getDesignTokens(isDarkMode ? 'dark' : 'light'));

  useEffect(()=>{
    setIsDarkMode(prefersDarkMode)
  },[prefersDarkMode])

  return (
  <Fragment>
    <CssBaseline/>
      <ThemeProvider theme={theme}>
        <GlobalStyles styles={globalStyle} />
        <PageProvider>
          <LangProvider>
              <Navbar switchMode={switchMode} isDarkMode={isDarkMode}/>
              <Box sx={container}>
              <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/portfolio' element={<Portfolio/>} />
                <Route exact path='/cv' element={<CV />} />
                <Route exact path='/portfolio/:id' element={<PortfolioView isDarkMode={isDarkMode} />} /> 
                {/* <Route exact path='/testing' element={<Testing />} />  */}
                <Route path='*' element={<PageNotFound />} /> 
              </Routes>
              </Box>
          </LangProvider>
        </PageProvider>
      </ThemeProvider>
  </Fragment>
  );
}

export default App;

//STYLES
const container = theme => ({
  width: '100vw',
  minWidth: '40rem', //320px
  height: '100%',
  background: theme.palette.background.default,
})

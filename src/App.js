import React, { useState, Component } from 'react';
import Classes from './assets/css/App.module.css';
import {Container, Grid, Box} from '@mui/material';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Body from './components/Body.js';



const App = () => {
  const [userLanguage, setUserLanguage]  = useState(navigator.language || navigator.userLanguage);
  
  const setNewLanguage = (newLanguage)=> {
    setUserLanguage(newLanguage)
  }

  return (
    <Container className="App" disableGutters={true}>
      <Box component="header">
        <Header userLanguage={userLanguage} onLanguageChanged={setNewLanguage} />
      </Box>

      
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
         <Body />
        </Grid>
        <Grid item xs={6} md={8}>
          
            abc
          
      </Grid>
        
      </Grid>
      <Box component="footer">
        
          <Footer userLanguage={userLanguage} />
        
      </Box>
    </Container>
  );
}

export default App;

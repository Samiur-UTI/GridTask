import React from 'react';
import PageHeader from './page/pageheader/pageheader.page';
import TextInput from './components/textInput/textinput.component';
import {Grid,makeStyles} from '@material-ui/core';
import './App.css';
import logo from './logo.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  }
}));
function App() {
  const classes = useStyles();
  return (
    <div className='main'>
      <PageHeader/>
      <img className='logo' alt='' src={logo}/>
          <Grid className={classes.root} container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextInput/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextInput/>
            </Grid> 
          </Grid>
    </div>
  );
}

export default App;

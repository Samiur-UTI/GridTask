import React from 'react';
import PageHeader from './page/pageheader/pageheader.page';
import TextInput from './components/textInput/textinput.component';
import {Grid,makeStyles,CssBaseline} from '@material-ui/core';
import './App.css';
import logo from './logo.jpg';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '160px 60px 0',
    width: '100%'
  }
}));
function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
       <CssBaseline />
      <div className='main'>
        <PageHeader/>
        <img className='logo' alt='' src={logo}/>
              <form>
                <Grid className={classes.root} container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextInput/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextInput/>
                  </Grid> 
                </Grid> 
              </form>
        </div>  
    </React.Fragment>
    
  );
}

export default App;

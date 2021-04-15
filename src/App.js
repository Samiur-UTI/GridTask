import React from 'react';
import PageHeader from './page/pageheader/pageheader.page';
import TextInput from './components/textInput/textinput.component';
import {Grid,makeStyles,CssBaseline} from '@material-ui/core';
import './App.css';
import logo from './logo.jpg';
import TextSelect from './components/textSelect/textSelect.component';
const useStyles = makeStyles((theme) => ({
  root: {
    padding: '160px 60px 0',
    width: '100%'
  },
  paragraph:{
    height:'25%'
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
                <Grid className={classes.root} container spacing={2}>
                    <Grid item xs={12} sm={12}>
                      <TextInput props={{label:'About Company',defaultValue: 'Type in your summary ',styles:'height: 100px;',row:5}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextInput props={{label:'Website',defaultValue: 'Website(URL)'}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextSelect/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextInput props={{label:'Company Size*', defaultValue: 'Employees'}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextInput props={{label:'Headquarters', defaultValue:'Enter Text'}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextInput props={{label:'Type', defaultValue:'Enter Text'}}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextInput props={{label:'Founded', defaultValue:'Enter Year'}}/>
                    </Grid>
                    <Grid item xs={12} sm={12}>
                      <TextInput props={{label:'Specialties',defaultValue: 'Website(URL)',row:2}}/>
                    </Grid> 
                </Grid> 
      </div>  
    </React.Fragment>
    
  );
}

export default App;

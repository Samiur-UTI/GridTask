import React from 'react'
import {FormControl,TextField,makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    textField: {
      marginLeft: theme.spacing(2),
      marginRight: theme.spacing(1),
      marginTop:theme.spacing(15),
      width: '90ch',
      
    },
  }));
  
export default function TextInput() {
    const classes = useStyles();
    return (
        <div>
            <FormControl>
                <TextField className={classes.textField} label="Website" variant="outlined" />
            </FormControl>
        </div>
    )
}

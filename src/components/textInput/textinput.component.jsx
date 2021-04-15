import React from 'react'
import {FormControl,TextField,makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    textField: {
        
    },
  }));
  
export default function TextInput() {
    const classes = useStyles();
    return (
        <div>
            <FormControl style={{width: '100%'}}>
                <TextField fullWidth className={classes.textField} label="Website" variant="outlined" />
            </FormControl>
        </div>
    )
}

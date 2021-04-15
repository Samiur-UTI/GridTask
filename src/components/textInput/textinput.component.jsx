import React from 'react'
import {FormControl,TextField,makeStyles} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%',
        marginTop: '10px'
    },
  }));
  
export default function TextInput({props}) {
    const {label,defaultValue,styles,row} = props;
    const classes = useStyles();
    console.log(row);
    if(!styles){
        return (
            <div>
                <FormControl className={classes.textField}>
                    <TextField  placeholder={defaultValue} fullWidth className={classes.textField} label={label} variant="outlined" />
                </FormControl>
            </div>
        )
    } else if (styles && row) {
        return(
            <div>
                <FormControl style={{styles}} className={classes.textField}>
                    <TextField  placeholder={defaultValue} fullWidth multiline rows={row} className={classes.textField} label={label} variant="outlined" />
                </FormControl>
            </div>
        )
            
    }
    else {
        return(
            <div>
                 <FormControl className={classes.textField}>
                    <TextField style={{height:'50px'}} placeholder={defaultValue} fullWidth multiline rows={row} className={classes.textField} label={label} variant="outlined" />
                </FormControl>
            </div>
        )
    }
}

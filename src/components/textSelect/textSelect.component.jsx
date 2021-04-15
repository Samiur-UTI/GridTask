import React from 'react'
import {FormControl,Select,MenuItem,makeStyles,InputLabel} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    formControl: {
        width: '100%',
        marginTop:'20px'
    }
}));
export default function TextSelect () {
    const classes = useStyles();
    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel id="demo-simple-select-outlined-label">Industry *</InputLabel>
                <Select
                labelId="demo-simple-select-outlined-label"
                id="demo-simple-select-outlined"
                value= 'select'
                onChange={(e) => (console.log(e.target.value))}
                label="Industry *"
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>IT</MenuItem>
                    <MenuItem value={20}>Industrial</MenuItem>
                    <MenuItem value={30}>Aerospace</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

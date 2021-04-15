import React from 'react'
import {FormControl,InputLabel,TextField,FormHelperText} from "@material-ui/core";
export default function TextInput() {
    return (
        <div>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <TextField label="Outlined" variant="outlined" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </div>
    )
}

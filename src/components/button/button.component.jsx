import React from 'react'
import {Button,makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    root: {
        width:'200px',
        height:'40px',
        borderRadius:'100px 100px 100px 100px',
        float:'right'
    }
}))
export default function ButtonUse() {
    const classes = useStyles();
    return (
        <div>
            <Button className={classes.root} variant="outlined">Add Benefits</Button>
        </div>
    )
}

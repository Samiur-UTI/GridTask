import React from 'react'
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import {Card,Typography,FormControlLabel,Checkbox,makeStyles,Grid} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
    root: {
        width:'60%',
        height:'80%',
        position:'absolute',
        marginLeft:'20%',
        marginTop:'3%',
        padding: theme.spacing(2, 4, 3)
    },
    addition: {

    }
}))
export default function UseModal() {
    const classes = useStyles();
    return (
      <Grid container>
            <Card className={classes.root}>
                <FormControlLabel className={classes.addition}
                        control={<Checkbox  icon={<ControlPointOutlinedIcon/>} name="checkedH" />}
                />
              
            </Card>
      </Grid>
    )
}

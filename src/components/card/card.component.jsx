import React from 'react';
import {Card,Typography,FormControlLabel,Checkbox,makeStyles} from "@material-ui/core";
import CheckCircleOutlineRoundedIcon from '@material-ui/icons/CheckCircleOutlineRounded';
const useStyles = makeStyles((theme) => ({
    root: {
        width:'25rem',
        height: '3rem',
        borderRadius:"50px 50px 50px 50px",
        justifyContent:"space-between",
        marginLeft:'5%',
        marginRight:'5%'
    },
    rounderCheck: {
        float:'right',
        paddingBottom:'30px'
        
    },
    icon: {
        float:'left',
        paddingLeft:'20px'
    },
    text: {
        marginTop:'7px'
    }
}))
export default function CardUse({item}) {
    const {component,title} = item;
    const classes = useStyles();
    return (
        <Card className={classes.root}>
                <FormControlLabel className={classes.icon}
                        control={<Checkbox  icon={component} name="checkedH" />}
                    />
                <FormControlLabel className={classes.rounderCheck}
                    control={<Checkbox  icon={<CheckCircleOutlineRoundedIcon/>} name="checkedH" />}
                />
                <Typography className={classes.text}>{title}</Typography>
        </Card>
        )
}


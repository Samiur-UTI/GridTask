import React from 'react'
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import {Card,Typography,FormControlLabel,Checkbox,makeStyles,Grid, CardActions,Paper} from "@material-ui/core";
import icons from '../../storage/icons'
const useStyles = makeStyles((theme) => ({
    root: {
        width:'60%',
        height:'80%',
        position:'absolute',
        marginLeft:'20%',
        marginTop:'3%',
        padding: theme.spacing(2, 4, 3),
    },
    addition: {
        paddingLeft:'20%'
    },
    benefits: {
        borderRadius:"30px 30px 30px 30px",
        width:'80%',
        margin:'10% 10% 10% 10%'
    },
    text:{
        padding:'10px 10px 10px 10px'
    },
    container: {
        backgroundColor:"#ede4e4"
    }
}))
export default function UseModal() {
    const classes = useStyles();
    const items = icons();
    return (
      <Grid container>
            <Card className={classes.root}>
                <Grid container className={classes.container}>
                    {items.map((item) => (
                        <Grid item xs={12} sm={4} md={4}>
                            <Card className={classes.benefits}>
                                <CardActions>
                                    <Typography className={classes.text}>{item.title}</Typography>
                                    <FormControlLabel className={classes.addition} control={<Checkbox  icon={<ControlPointOutlinedIcon/>} name="checkedH" />}/>
                                </CardActions>
                            </Card>
                        </Grid> 
                    ))}
                </Grid>
            </Card>
      </Grid>
    )
}

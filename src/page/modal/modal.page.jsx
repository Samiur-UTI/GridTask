import React from 'react'
import ControlPointOutlinedIcon from '@material-ui/icons/ControlPointOutlined';
import {Card,FormControlLabel,Checkbox,makeStyles,Grid,Paper,Button} from "@material-ui/core";
import icons from '../../storage/icons';
const useStyles = makeStyles((theme) => ({
    root: {
        width:'60%',
        height:'80%',
        position:'absolute',
        marginLeft:'20%',
        marginTop:'3%',
        padding: theme.spacing(2, 4, 3),
        overflow:'scroll'
    },
    addition: {
        paddingLeft:'10%',
        paddingRight:'10%'
    },
    benefits: {
        borderRadius:"30px 30px 30px 30px",
        width:'80%',
        margin:'0% 2% 3% 3%'
    },
    text:{
        padding:'10px 10px 10px 10px'
    },
    container: {
        backgroundColor:"#ede4e4",
        borderRadius:'10px 10px 10px 10px'
    },
    orange:{
        color:'#ff8547'
    },
    back: {
        borderRadius:'20px 20px 20px 20px',
        width:'100px',
        top:150,
        float:'right',
        marginLeft:'20px',
        marginTop:'10px'
    }
}))
export default function UseModal({close}) {
    const classes = useStyles();
    const items = icons();
    return (
      <Grid container>
            <Card className={classes.root}>
               <h3>Add Benifits</h3>
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <h4 className={classes.text}>Choose Benifit to Add</h4>
                    </Grid>
                    {items.map((item) => (
                        <Grid item xs={12} sm={4} md={3}>
                            <Paper variant='outlined' className={classes.benefits} elevation={2}>
                                <FormControlLabel className={classes.addition} control={<Checkbox  icon={<ControlPointOutlinedIcon/>} name="checkedH" />} label={item.title}/>
                            </Paper>
                        </Grid> 
                    ))}
                </Grid>
                <Grid item xs={12}>
                       <h4><a className={classes.orange} href='/'>Benefits</a></h4>
                </Grid>
                <Grid item xs={12}>
                       <Button onClick={close} className={classes.back} variant="contained" color="primary">Save</Button>
                       <Button onClick={close} className={classes.back} variant="outlined" color="primary">Back</Button>
                </Grid>
            </Card>
      </Grid>
    )
}

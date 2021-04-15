import {useState} from 'react'
import {Button,makeStyles,Modal} from '@material-ui/core';
import UseModal from '../../page/modal/modal.page';
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
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <div>
            <Button className={classes.root} variant="outlined" onClick={handleOpen}>Add Benefits</Button>
            <Modal open={open} onClose={handleClose}>
                <UseModal/>
            </Modal>
        </div>
    )
}

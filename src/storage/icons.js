import React from 'react'
import LocalHospitalOutlinedIcon from '@material-ui/icons/LocalHospitalOutlined';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ContactlessOutlinedIcon from '@material-ui/icons/ContactlessOutlined';
export default function icons() {
    return (
     [
        {   id:1,   
            component: <LocalHospitalOutlinedIcon/>,
            title:'Excellent Healthcare'
        },
        {   id:2,
            component: <HomeIcon/>,
            title: 'Daily Snacks'
        },
        {   id:3,
            component: <EqualizerIcon/>,
            title: 'Group Activities'
        },
        {   id:4,
            component: <SettingsTwoToneIcon/>,
            title: 'Volunteer Oppurtunities'
        },
        {   id:5,
            component: <EmojiObjectsOutlinedIcon/>,
            title:'Wellness Programme'
        },
        {   id:6,
            component: <ContactlessOutlinedIcon/>,
            title:'Paid Time off'
        }
     ]
    )
}

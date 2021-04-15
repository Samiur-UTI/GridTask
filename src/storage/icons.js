import React from 'react'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import HomeIcon from '@material-ui/icons/Home';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import SettingsTwoToneIcon from '@material-ui/icons/SettingsTwoTone';
import EmojiObjectsOutlinedIcon from '@material-ui/icons/EmojiObjectsOutlined';
import ContactlessOutlinedIcon from '@material-ui/icons/ContactlessOutlined';
export default function icons() {
    return (
     [
        {
            component: <DonutLargeIcon/>,
            title: null
        },
        {
            component: <HomeIcon/>,
            title: 'Daily Snacks'
        },
        {
            component: <EqualizerIcon/>,
            title: 'Group Activities'
        },
        {
            component: <SettingsTwoToneIcon/>,
            title: 'Volunteer Oppurtunities'
        },
        {
            component: <EmojiObjectsOutlinedIcon/>,
            title:'Wellness Programme'
        },
        {
            component: <ContactlessOutlinedIcon/>,
            title:'Paid Time off'
        }
     ]
    )
}

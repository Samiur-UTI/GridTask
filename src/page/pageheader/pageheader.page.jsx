import React from 'react';
import cover from './cover.jpg';
import logo from './logo.jpg';
import './pageheader.page.scss';
export default function PageHeader() {
    return (
        <div className='header'>
            <div className='cover'>
                <img className='photo' alt='' src={cover}/>
                <img className='logo' alt='' src={logo}/>
            </div>
        </div>
    )
}

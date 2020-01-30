import React from 'react';
import '../App.css' 
import CssBaseline from '@material-ui/core/CssBaseline';

function Footer() {
    return (
        <>
            <CssBaseline />
            <div className='footer-1'>
                Facebook / Twitter / YouTube
            </div>
            <div className='footer-2'>
                &copy; {new Date().getFullYear()} Prove It Athletics
            </div>

        </>
    );
}

export default Footer;
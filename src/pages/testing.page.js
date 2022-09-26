import { Box } from '@mui/material';
import { useContext, useState } from 'react';
import CookieConsent from '../components/cookieConsent/cookieConsent.component';

const Testing = props => {
    return (
        <Box sx={testing}>
            <CookieConsent />
        </Box>
    )
}

export default Testing;

const testing = theme => ({
    width: '100vw',
    height: '100vh',
    paddingTop: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

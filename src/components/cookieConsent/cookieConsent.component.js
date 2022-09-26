import { Box, Typography, Link } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CookieConsent = props => {
    const cookieLocal = localStorage.getItem('cookies-aceptadas');
    const [cookieConsented, setCookieConsented] = useState(cookieLocal || false);
    
    const handleClick = props => {
        setCookieConsented(true)
        // var expirarem = new Date().getTime() + 1000;
        // localStorage.setItem('cookies-aceptadas', JSON.stringify({
        //     "value": true,
        //     "expires": expirarem
        // }));
    }

    return (
        <Box sx={[container, {display: cookieConsented && 'none'}]}>
            <Typography variant='h5'>Cookies</Typography>
            <Typography variant='body1'>
                Utilizamos cookies propias y de terceros para mejorar nuestros servicios.
            </Typography>
            <Box component='button' onClick={handleClick}>Accept</Box>
        </Box>
    )
}

export default CookieConsent;

const container = theme => ({
    width: '35rem',
    margin: '0 auto',
    padding: '2rem',
    background: 'green',
    '& button': {
        cursor: 'pointer'
    }
})

// botonAceptarCookies.addEventListener('click', () => {
// 	avisoCookies.classList.remove('activo');
// 	fondoAvisoCookies.classList.remove('activo');

// 	localStorage.setItem('cookies-aceptadas', true);

// 	dataLayer.push({'event': 'cookies-aceptadas'});
// });
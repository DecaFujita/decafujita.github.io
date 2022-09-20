import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GoBackBtn = props => {
    const navigate = useNavigate();
    return (
        <Box sx={back}>
            <svg role="img" style={{width:"inherit", height:"inherit", stroke:"inherit" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-labelledby="arrowLeftIconTitle"  strokeWidth="1" strokeLinecap="square" strokeLinejoin="miter" fill="none">
                <title id="arrowLeftIconTitle">Arrow Left</title>
                <path d="M9 6l-6 6 6 6"/>
                <path d="M21 12H4"/>
                <path strokeLinecap="round" d="M3 12h1"/>
            </svg>
            <Typography onClick={()=>navigate(-1)}  style={{transform: 'translateY(-.1rem)'}} variant='body1'>back</Typography>
        </Box>
    )
}

export default GoBackBtn;

const back = theme => ({
    height: '2rem',
    cursor: 'pointer',
    color: theme.palette.text.primary,
    display: 'flex',
    stroke: theme.palette.text.primary,
    '& svg': {
        marginRight: '.5rem'
    }
})
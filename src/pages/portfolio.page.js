import { Link, Box, Typography } from "@mui/material";
import { SocialIcoCodePen } from '../components/icons/Icons';
import { useTheme } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { ScrollToTop } from '../utils';

import ImgMonitor from '../img/portfolio-monitor-01.jpg';
import ImgKlauben from '../img/portfolio-klauben-01.jpg';
import ImgCruzada from '../img/portfolio-cruzada-01.jpg';
import ImgRetailOne from '../img/portfolio-retailone-01.jpg';
import ImgMobdiqOne from '../img/portfolio-mobdiq-01.jpg';
import ImgWrapioca from '../img/portfolio-wrapioca-01.jpg';

import ImgPackaging from '../img/portfolio-packaging-01.jpg';
import ImgEstarBien from '../img/portfolio-estarbien-01.jpg';

const Portfolio = props => {
    const theme = useTheme();
    const navigate = useNavigate();
    ScrollToTop();
    return (
        <Box sx={container}>
            <Box sx={content}>
                <Box sx={pic1} onClick={() => navigate(`/portfolio/1`)} />
                <Box sx={pic2} onClick={() => navigate(`/portfolio/2`)} />
                <Box sx={pic3} onClick={() => navigate(`/portfolio/3`)} />
                <Box sx={pic4} onClick={() => navigate(`/portfolio/4`)} />
                <Box sx={pic5} onClick={() => navigate(`/portfolio/5`)} />
                <Box sx={pic6} onClick={() => navigate(`/portfolio/7`)} />
                <Box sx={pic7} onClick={() => navigate(`/portfolio/6`)} />
            </Box>
            <Link sx={link} href='https://codepen.io/decafujita' target="_blank">
                <Typography variant='h5' sx={linkText}>More? Check out my</Typography>
                <SocialIcoCodePen fill={theme.palette.text.primary}/>
            </Link>
        </Box>
    )
};

export default Portfolio;

const link = theme => ({
    height: '5rem',
    marginTop: '2rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '2rem 0',
    textDecoration: 'none'
})

const linkText = theme => ({
    color: theme.palette.text.primary,
    fontWeight: '700',
    marginRight: '1rem'
})

const pic1 = theme => ({
    gridColumn: '1/2',
    gridRow: '1/3',
    backgroundImage: `url(${ImgMonitor})`,
    backgroundSize: 'cover',
})

const pic2 = theme => ({
    gridColumn: '2/3',
    gridRow: '1/2',
    backgroundImage: `url(${ImgMobdiqOne})`,
    backgroundSize: 'cover'
})

const pic3 = theme => ({
    gridColumn: '3/4',
    gridRow: '1/2',
    backgroundImage: `url(${ImgEstarBien})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('mobile')]: {
        gridColumn: '2/3',
        gridRow: '2/3', 
    }
})

const pic4 = theme => ({
    gridColumn: '2/4',
    gridRow: '2/3',
    backgroundImage: `url(${ImgKlauben})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('mobile')]: {
        gridColumn: '1/-1',
        gridRow: '3/4', 
    }
})

const pic5 = theme => ({
    gridColumn: '1/2',
    gridRow: '3/4',
    backgroundImage: `url(${ImgCruzada})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('mobile')]: {
        display: 'none'
    }
})  
const pic6 = theme => ({
    gridColumn: '2/3',
    gridRow: '3/4',
    backgroundImage: `url(${ImgPackaging})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('mobile')]: {
        gridColumn: '1/2',
        gridRow: '4/5', 
    }
})  
const pic7 = theme => ({
    gridColumn: '3/4',
    gridRow: '3/4',
    backgroundImage: `url(${ImgRetailOne})`,
    backgroundSize: 'cover',
    [theme.breakpoints.down('mobile')]: {
        gridColumn: '2/3',
        gridRow: '4/5', 
    }
})  

const widthView = 'calc(100vw/3 - 1rem)';
const widthViewMobile = 'calc(100vw/2 - 1rem)';

const content = theme => ({
    cursor: 'pointer',
    minWidth: '40rem',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 32rem)',
    gridTemplateRows: 'repeat(3, 32rem)',
    gridGap: '1rem',
    [theme.breakpoints.down('laptop')]: { //900
        gridTemplateColumns: 'repeat(3, 28.5rem)',
        gridTemplateRows: 'repeat(3, 28.5rem)',
    },
    [theme.breakpoints.down('tablet')]: { //700
        gridTemplateColumns: `repeat(3, ${widthView})`,
        gridTemplateRows: `repeat(3, ${widthView})`,
    },
    [theme.breakpoints.down('mobile')]: {  //rem 50%
        gridTemplateColumns: `repeat(2, ${widthViewMobile})`,
        gridTemplateRows: `repeat(4, ${widthViewMobile})`,
    }

    
})

const container = theme => ({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10rem 0 5rem 0',
    [theme.breakpoints.down('tablet')]: { padding: '5rem 0' },
    [theme.breakpoints.down('tablet')]: { padding: '6rem 0' }
})
import { useEffect } from 'react';
import { Box, Typography, Link } from '@mui/material';
import aboutPic from '../img/decafujita.jpg';
import Footer from '../components/footer/Footer.component';
import Intro from './home.intro.page';

const Home = props => {
    const handleScroll = props => {
        document.getElementById('about').scrollIntoView({behavior: 'smooth'});
    }

    useEffect(() => {
        try { // start from top (scroll)
            window.scroll ({
                top: 0,
                left: 0,
                behavior: 'smooth'
            })
        } catch {
            window.scrollTo(0,0) // fallback to old browsers
        }
    }) 
    return (
        <Box sx={container}>
            <Intro handleClick={handleScroll} />
            <Box id='about' sx={about}>
                <Box sx={content}>
                    <Box sx={contentASide}>
                        <Box sx={contentASideText}>
                            <Typography variant='h3' sx={textColor}>About me</Typography>
                            <Box mt={4}>
                                <Typography variant='body1' sx={textColor}> 
                                    I'm a Brazilian Creative Front End developer.
                                    I have a strong design background, and for the past couple of years,
                                    I've been studying hard to transpose this experience into coding.
                                    Although programming started as a longing for smoothing the communication
                                    between the design and the development team, it rapidly became a passion of mine. <br/><br/>
                                    If you want to know more about me, check out the links below. <strong>See you around!</strong>
                                </Typography>
                                <Box sx={contentButtons}>
                                    <Link href='/portfolio' variant='body1' sx={link}>Portfolio</Link>
                                    <Link href='/cv' variant='body1' sx={link}>Curriculum</Link>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={contentBSide}>
                        <Box sx={contentBubble}>
                            <Typography variant='h4'>designer</Typography>
                            <Typography variant='body1' sx={{margin: '.5rem 0 3rem 2.5rem'}}>
                                    UI/UX<br></br>
                                    Branding<br></br>
                                    Packaging<br></br>
                                    Graphic
                            </Typography>
                            <Typography variant='h4'> &lt;coder/&gt;</Typography>
                            <Typography variant='body1' sx={{margin: '.5rem 0 0 2.5rem'}}>
                                    HTML<br></br>
                                    CSS / SCSS<br></br>
                                    JS / React<br></br>
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                <Box sx={tail2} />
            </Box>
            {/* <Footer /> */}
        </Box>
    )
};
export default Home;

//STYLES
const textColor = theme => ({
    color: theme.palette.text.primary,
    [theme.breakpoints.down('tablet')]: {
        lineHeight: '2rem',
    }

})
const link = theme => ({ 
    marginRight: '4rem',
    fontWeight: '700',
    letterSpacing: '.05rem',
    borderBottom: '.1rem solid transparent',
    transition: 'border .5s linear',
    '&:link, &:visited': {
        textDecoration: 'none',
        transition: 'border .5s linear',
    },
    '&:hover': {
        borderBottom: `.1rem solid ${theme.palette.primary.main}`
    }
})

// STYLES for About me (section2)

const contentASide = theme => ({
    width: '50%',
    paddingRight: '5rem',
    display: 'flex',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('laptop')]: {
        paddingLeft: '5rem',
        paddingRight: '2rem',
    },
    [theme.breakpoints.down('mobile')]: {
        width: '100%',
        // paddingLeft: '2rem',
        justifyContent: 'center',
        marginBottom: '3rem',
        padding: '0'
    }
})

const contentASideText = theme => ({
    width: '45rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    [theme.breakpoints.down('mobile')]: {
        width: '100%',
    }
})

const contentBSide = theme => ({
    width: '50%',
    borderRadius: '5rem 0 0 0',
    backgroundImage: `url(${aboutPic})`,
    // background: 'red',  
    backgroundSize: 'auto 100%',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('mobile')]: {
        width: '100%',
        height: '40rem',
        display: 'flex',
        justifyContent: 'flex-end'
    }
})
const contentBubble = theme => ({
    background: theme.palette.primary.main,
    width: '100%',
    height: '100%',
    marginLeft: '20rem',
    borderRadius: '5rem 0 0 0',
    padding: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('tablet')]: {
        padding: '2rem',
        marginLeft: '16rem',
    },
    [theme.breakpoints.down('mobile')]: {
        width: '60%',
        marginLeft: '0rem',
        padding: '5rem',
        alignItems: 'center'
    }
})

const contentButtons = theme => ({marginTop: '3rem'})

const content = theme => ({
    width: '100%',
    height: '40rem',
    margin: '0 auto',
    display: 'flex',
    [theme.breakpoints.down('mobile')]: {
        height: '40%',
        flexDirection: 'column'
    }
})
 
const about = theme => ({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-end',
    background: theme.palette.background.default,
    paddingTop: '10rem',
    [theme.breakpoints.down('mobile')]: {
        width: '90%',
        margin: '0 auto'
    },

})

// STYLES for Home Introduction (section1)

const tail2 = theme => ({
    width: '7rem',
    height: '7rem',
    background:`linear-gradient(-135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)`,
    marginBottom: '2rem'
})

const container = theme => ({
    paddingTop: '5rem',
    width: '100%',
    minWidth: '40rem',
    height: '100%'
})


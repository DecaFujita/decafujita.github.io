import { ChevronDown } from '../components/icons/Icons';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const IntroPage = props => {
    const mainColour = useTheme().palette.primary.main;
    const text = props.text;
    return (
        <Box sx={intro}>
            <Box sx={aSide}>
                <Box sx={bubble}>
                    <Box sx={bubbleText}>
                        <Typography variant='h2' sx={text1}>
                            {text.hello}&nbsp; <br/>
                            {/* { width > 500 && <br/>} */}
                            {text.im}
                        </Typography>
                        <Typography variant='h1' sx={text2}>
                            deca&nbsp;<br/>
                            {/* { width > 500 && <br/>} */}
                            fujita
                        </Typography>
                    </Box>
                </Box>
                <Box sx={tail} />
            </Box>
            <Box sx={bSide}>
                <Typography variant='h4' sx={text3}>{text.designer} <Typography sx={[textColor, {display: 'inline-block', fontSize: '2.5rem'}]}>+</Typography> &lt;coder/&gt;</Typography>
                <Box sx={chevron} onClick={props.handleClick}>
                    <ChevronDown colour={mainColour} />
                </Box>
            </Box>
        </Box>
    )
}

export default IntroPage;

//STYLES
const textColor = theme => ({color: theme.palette.text.primary })
const text1 = theme => ({ color: 'white', lineHeight: '6.5rem' })
const text2 = theme => ({ 
    color: theme.palette.secondary.main,
    lineHeight: '9.5rem',
    // [theme.breakpoints.down('mobile')]: {
    //     fontSize: '8rem'
    // }
})
const text3 = theme => ({ color: theme.palette.primary.main })
// const text4 = theme => ({ display: 'inline-block'})


// STYLES for Home Introduction (section1)
const bubbleText = theme => ({ 
    display: 'flex',
    flexDirection: 'column',
    [theme.breakpoints.down('mobile')]: {
        // padding: '2rem'
    }
})

const bubble = theme => ({
    width: '100%',
    height: '47rem',
    background: theme.palette.primary.main,
    borderRadius: '0 7rem 0 0',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '5rem',
    [theme.breakpoints.down('mobile')]: {
        justifyContent: 'center',
        width: '100%',
        borderRadius: 0,
        minHeight: '45vh'
    }
})

const chevron = theme => ({
    cursor: 'pointer',
    width: '7rem',
    transform: 'translateY(12rem)',
    transition: 'all .3s easeOutElastic',
    [theme.breakpoints.down('mobile')]: { transform: 'translateY(4rem)' },
    '&:hover': {
        transform: 'translateY(12.2rem)',
        [theme.breakpoints.down('mobile')]: { transform: 'translateY(4.5rem)' },
    }
})

const tail = theme => ({
    width: '7rem',
    height: '7rem',
    background:`linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.main} 50%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)`
})
const aSide = theme => ({
    width: '50%',
    paddingRight: '8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    [theme.breakpoints.down('tablet')]: {
        paddingRight: '0rem',
        // justifyContent: 'flex-start',
    },
    [theme.breakpoints.down('mobile')]: {
        width: '100%',
        minHeight: '55%'
    },
})

const bSide = theme => ({ 
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('tablet')]: {
        padding: '5rem',
        textAlign: 'center'
    },
    [theme.breakpoints.down('mobile')]: {
        width: '100%',
        minHeight: '45%',
        padding: '3rem',
        textAlign: 'center',
        justifyContent: 'flex-start',
    }
})
 
const intro = theme => ({
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    [theme.breakpoints.down('mobile')]: {
        flexDirection: 'column'
    }
})

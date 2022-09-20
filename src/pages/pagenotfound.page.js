import { Box, Typography, Link } from '@mui/material';

const PageNotFound = props => {
    return (
        <Box sx={intro}>
            <Box sx={aSide}>
                <Box sx={bubble}>
                    <Box sx={bubbleText}>
                        <Typography variant='h1' sx={text2}>
                            Oops!&nbsp;<br/>
                        </Typography>
                        <Typography variant='h2' sx={text1}>
                            404 error
                        </Typography>
                    </Box>
                </Box>
                <Box sx={tail} />
            </Box>
            <Box sx={bSide}>
                <Typography variant='h4' sx={text3}>I couldn't find this page.</Typography>
                <Typography variant='body1' sx={[textColor, {display: 'inline-block'}]}>Not to worry! </Typography>
                <Typography variant='body1' sx={[textColor, {display: 'inline-block'}]}>Why don't you try one of those links:</Typography>
                <Box sx={contentButtons}>
                    <Link href='/portfolio' variant='body1' sx={link}>Portfolio</Link>
                    <Link href='/cv' variant='body1' sx={link}>Curriculum</Link>
                </Box>
            </Box>
        </Box>
    )
}

export default PageNotFound;

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
    background: theme.palette.grey.three,
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

const tail = theme => ({
    width: '7rem',
    height: '7rem',
    background:`linear-gradient(135deg, ${theme.palette.grey.three} 0%, ${theme.palette.grey.three} 50%, rgba(255,255,255,0) 50%, rgba(255,255,255,0) 100%)`
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

const contentButtons = theme => ({width: '20rem', display: ' flex', justifyContent: 'space-between', marginTop: '3rem'})

const link = theme => ({ 
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

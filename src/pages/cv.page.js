import { Box, Divider, Typography, Link } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { 
    SocialIcoCodePen, 
    SocialIcoLinkedIn, 
    SocialIcoGitHub, 
    SocialIcoInsta,
    SocialIcoMessenger,
    SocialIcoWhatsapp,
    EmailIco,
    PinIco,
} from '../components/icons/Icons';
import IconsApps from '../components/icons/IconsApps';
import SkillItem from '../components/skillbar/SkillItem.component';
import WorkItem from "../components/cv/WorkList.component";
import { skillList, workList } from '../components/skillbar/SkillList.component';
import IconsInterests from '../components/icons/iconsInterests';
import { ScrollToTop } from "../utils";
import { PageContext } from '../contexts/Page.context';
import { Fragment, useContext } from 'react';
import CVMobile from './cv.mobile.page';

const CV = props => {
    const theme = useTheme();
    const { width } = useContext(PageContext);

    ScrollToTop();

    return (
        <Box sx={container}>
            { width < 500 
            ? 
                <CVMobile />
            :
                <Fragment>
                    <Box sx={aSide}>
                        <Box sx={aContent}>
                            <Typography variant='h4' mb={1}>Deca Fujita</Typography>
                            <Typography variant='body1' sx={{fontWeight: '600'}}>
                                Front End developer
                            </Typography>
                            <Box sx={personalInfo} mt={8}>
                                <Typography variant='body1' mr={2}>
                                    Rio de Janeiro - Brazil
                                </Typography>
                                <PinIco mt='-.15rem' fill={theme.palette.secondary.main}/>
                            </Box>
                            {/* <Box sx={personalInfo} mt={1}>
                                <Typography variant='body1' mr={2}>
                                    +55 997523 9704
                                </Typography>
                                <SocialIcoWhatsapp fill={theme.palette.secondary.main}/>
                            </Box> */}
                            <Box sx={personalInfo} mt={1}>
                                <Typography variant='body1' mr={1.5}>
                                    decafujita@gmail.com
                                </Typography>
                                <EmailIco fill={theme.palette.secondary.main}/>
                            </Box>
                            <Link sx={personalLink}  href='https://www.linkedin.com/in/deca-fujita-71032249/' target="_blank" mt={1}>
                                <Typography variant='body1' mr={2}>
                                    /decafujita
                                </Typography>
                                <SocialIcoLinkedIn fill={theme.palette.secondary.main}/>
                            </Link>
                            <Link sx={personalLink} href='https://github.com/DecaFujita' target="_blank" mt={1}>
                                <Typography variant='body1' mr={2}>
                                    /decafujita
                                </Typography>
                                <SocialIcoGitHub fill={theme.palette.secondary.main}/>
                            </Link>
                            <Link sx={personalLink} href='https://codepen.io/decafujita' target="_blank" mt={1}>
                                <Typography variant='body1' mr={2}>
                                    /decafujita
                                </Typography>
                                <SocialIcoCodePen fill={theme.palette.secondary.main}/>
                            </Link>
                            <Link sx={personalLink} href='https://www.instagram.com/decafujita/' target="_blank" mt={1}  mb={5}>
                                <Typography variant='body1' mr={2}>
                                    /decafujita
                                </Typography>
                                <SocialIcoInsta fill={theme.palette.secondary.main}/>
                            </Link>
                            
                            {/* <Link sx={personalLink} mt={1} mb={5}>
                                <Typography variant='body1' mr={2}>
                                    /decafujita
                                </Typography>
                                <SocialIcoMessenger fill={theme.palette.secondary.main}/>
                            </Link> */}
                            <Divider sx={dividerA} />
                            <Box sx={[session, {justifyContent: 'space-between'}]} mt={4} mb={3}>
                                <Typography variant='body2' sx={[sessionTitle, skillTitle ]}>
                                    TECHNICAL SKILLS
                                </Typography>
                                <Box sx={icons}>
                                    <IconsApps />
                                </Box>
                            </Box>
                            { skillList.map(item => <SkillItem key={item.id} skill={item.skill} percentage={item.percentage} />)}
                            <br/><br/>
                            <Divider sx={dividerA} />
                            {/* INTERESTS */}
                            <Box sx={[session, {justifyContent: 'space-between'}]} mt={4}>
                                <Typography variant='body2' sx={[sessionTitle, skillTitle ]}>
                                    INTERESTS
                                </Typography>
                                <Box sx={icons}>
                                <IconsInterests />
                                </Box>
                            </Box>
                        
                        </Box>
                    </Box>

                    {/* B SIDE */}
                    <Box sx={bSide}>
                        <Box sx={bContent}>
                            <Typography variant='h3'>Curriculum</Typography>
                            <Typography variant='body1' mt={5} mb={5}>
                            Front End developer with a strong design background. Demonstrated history of  
                            working in the creative industry as a UX/ UI, Branding, Packaging and Graphic designer.
                            Capable of seamlessly interpreting and adapting UI design into the front end coding.
                            Eager to collaborate and learn from senior developers. 
                            </Typography>
                            <Divider sx={dividerB} />
                            {/* WORK EXPERIENCE */}
                            <Box sx={session}  mt={4} mb={2}>
                                <Box sx={columnA}>
                                    <Typography variant='body2' sx={sessionTitle}>
                                        Work experience
                                    </Typography>
                                </Box>
                                <Box sx={columnB} mb={1}>
                                { workList.map(item => <WorkItem key={`workitem-${item.id}`} title={item.title} company={item.company} period={item.period} />)}
                                </Box>
                            </Box>
                            <Divider sx={dividerB} />
                            {/* EDUCATION    */}
                            <Box sx={session}  mt={4}>
                                <Box sx={columnA}>
                                    <Typography variant='body2' sx={sessionTitle}>
                                        Education
                                    </Typography>
                                </Box>
                                <Box sx={columnB}>
                                    <Typography variant='body1' sx={sessionSubTitle}>
                                        Goldsmiths,<br/>Univertisty of London
                                    </Typography>  
                                    <Typography variant='body2' mb={2}>
                                        Master of Arts (MA), Brands, Communication <br/>
                                        and Culture (Promotional Media) <br/>
                                        2012 - 2013
                                    </Typography>                              
                                    
                                    <Typography variant='body1' sx={sessionSubTitle}>
                                        Universidade Federal<br/>do Rio de Janeiro
                                    </Typography>
                                    <Typography variant='body2' mb={5}>
                                        Bachelor’s degree, Design <br/>
                                        1999 - 2003
                                    </Typography>
                                </Box>
                            </Box>
                            <Divider sx={dividerB} /> 
                            {/* CERTIFICATION */}
                            <Box sx={session}  mt={4}>
                                <Box sx={columnA}>
                                    <Typography variant='body2' sx={sessionTitle}>
                                        Certification
                                    </Typography>
                                </Box>
                                <Box sx={columnB}>
                                    <Typography variant='body1' sx={sessionSubTitle}>
                                        CS50’s Web Programming<br/>with Python and Java Script
                                    </Typography>  
                                    <Typography variant='body2' mb={2}>
                                        Harvard - edX<br/>
                                        2021 
                                    </Typography>                              
                                    
                                    <Typography variant='body1' sx={sessionSubTitle}>
                                        CS50’s Introduction to Computer Science
                                    </Typography>
                                    <Typography variant='body2' mb={4}>
                                        Harvard - edX<br/>
                                        2020
                                    </Typography> 
                                </Box>
                            </Box>
                            <Divider sx={dividerB} /> 
                            {/* LANGUAGES */}
                            <Box sx={session}  mt={4}>
                                <Box sx={columnA}>
                                    <Typography variant='body2' sx={sessionTitle}>
                                        Languages
                                    </Typography>
                                </Box>
                                <Box sx={columnB}>
                                    <Typography variant='body1' sx={sessionSubTitle}>
                                    Portuguese
                                    </Typography>  
                                    <Typography variant='body2' mb={2}>                              
                                    Mother tongue
                                    </Typography>
                                    <Typography variant='body1' sx={sessionSubTitle}>
                                    Spanish
                                    </Typography>
                                    <Typography variant='body2' mb={2}>                              
                                    Fluent
                                    </Typography>
                                    <Typography variant='body1' sx={sessionSubTitle}>
                                    English
                                    </Typography>
                                    <Typography variant='body2' mb={5}>                              
                                    Fluent
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Fragment>
            }
        </Box>
    )
}

export default CV;

//STYLES

const personalLink = theme => ({
    display: 'flex',
    justifyContent: 'flex-end',
    height: '2rem',
    alignItems: 'center',
    cursor: 'pointer',
    
    '&:hover': {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
    }
})

const personalInfo = theme => ({
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '2rem',
})

const dividerB = theme => ({borderTop: `.2px solid ${theme.palette.primary.main}`})
const dividerA = theme => ({
    borderTop: `.2px solid ${theme.palette.secondary.main}`,
    [theme.breakpoints.down('tablet')]: {
        marginTop: 0
    },
    // [theme.breakpoints.down('mobile')]: {
    //     marginTop: 0
    // }
})

const sessionTitle = theme => ({
    textTransform: 'uppercase',
    fontWeight: '700',
    color: theme.palette.primary.main,
    letterSpacing: '.1rem',
})

const skillTitle = theme => ({
    fontWeight: '700',
    color: theme.palette.secondary.main,
    width: '30%',
    letterSpacing: '0',
    textAlign: 'left',
    [theme.breakpoints.down('tablet')]: {
        width: '70%',
        marginBottom: '2rem'
    }
})

const icons = theme => ({
    width: '20rem',
    [theme.breakpoints.down('tablet')]: {
        width: '90%',
        justifySelf: 'flex-end'
    }
})

const sessionSubTitle = theme =>({
    fontWeight: '700',
    letterSpacing: '.1rem'
})

const columnA = theme =>({
    width: '25%',
    [theme.breakpoints.down('tablet')]: { marginBottom: '1.5rem'}
})

const columnB = theme =>({
    width: '75%',
    paddingLeft: '3rem',
    [theme.breakpoints.down('tablet')]: { width: '100%'}
})

const session = theme =>({
    display: 'flex',
    [theme.breakpoints.down('tablet')]: {
        display: 'block',
        marginBottom: '4rem'
    }
})

const aContent = theme => ({
    width: '40rem',
    textAlign: 'right',
    padding: '5rem',
    [theme.breakpoints.down('tablet')]: {
        padding: '5rem 2.5rem',
    }
})
const bContent = theme => ({
    width: '60rem',
    padding: '5rem'
})

const aSide = theme => ({
    width: '40%',
    display: 'flex',
    marginBottom: '7rem',
    borderRadius: '0 5rem 0 0',
    justifyContent: 'flex-end',
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
})

const bSide = theme => ({
    width: '60%',
    display: 'flex',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary
})

const container = theme => ({
    paddingTop: '20rem',
    width: '100%',
    height: '100%',
    display: 'flex',
    [theme.breakpoints.down('laptop')]: {
        paddingTop: '10rem'
    },
    [theme.breakpoints.down('mobile')]: {
        display: 'block',
        paddingTop: '6rem'
    }
})
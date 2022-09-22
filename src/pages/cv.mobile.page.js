import { Box, Divider, Typography, Link } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { 
    SocialIcoCodePen, 
    SocialIcoLinkedIn, 
    SocialIcoGitHub, 
    SocialIcoInsta,
    EmailIco,
    PinIco,
} from '../components/icons/Icons';
import IconsApps from '../components/icons/IconsApps';
import SkillItem from '../components/skillbar/SkillItem.component';
import WorkItem from "../components/cv/WorkList.component";
import { skillList } from '../components/skillbar/SkillList.component';
import IconsInterests from '../components/icons/iconsInterests';
import { ScrollToTop } from "../utils";
import { Fragment, useContext } from 'react';
import { LangContext } from '../contexts/Lang.context';
import { texts } from '../texts/texts';

const CVMobile = props => {
    const theme = useTheme();
    const { isLang } = useContext(LangContext);
    const text = texts[isLang];
    ScrollToTop();

    return (
        <Fragment>
            <Box sx={aSide}>
                <Box sx={aContent}>
                    <Box>
                        <Typography variant='h4'>Deca Fujita</Typography>
                        <Typography variant='body1' mt={.5} sx={{fontWeight: '600'}}>
                            {text.frontEndDeveloper}
                        </Typography>
                        <Box sx={personalInfo} mt={5}>
                            <PinIco mt='.3rem' fill={theme.palette.secondary.main}/>
                            <Typography variant='body1' ml={1.4}>
                                Rio de Janeiro - {text.brazil}
                            </Typography> 
                        </Box>
                        <Box sx={personalInfo} mt={1}>
                            <EmailIco fill={theme.palette.secondary.main}/>
                            <Typography variant='body1' ml={1}>
                                decafujita@gmail.com
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={socialLinks}>
                        <Link sx={personalLink} href="https://cl.linkedin.com/in/deca-fujita-71032249" target="_blank">
                            <SocialIcoLinkedIn fill={theme.palette.secondary.main}/>
                        </Link>
                        <Link sx={personalLink} href="https://github.com/DecaFujita" target="_blank" mt={1.5}>
                            <SocialIcoGitHub fill={theme.palette.secondary.main}/>
                        </Link>
                        <Link sx={personalLink} href="https://codepen.io/decafujita" target="_blank" mt={1.5}>
                            <SocialIcoCodePen fill={theme.palette.secondary.main}/>
                        </Link>
                        <Link sx={personalLink} href='https://www.instagram.com/decafujita/' target="_blank" mt={1.5}>
                            <SocialIcoInsta fill={theme.palette.secondary.main}/>
                        </Link>
                    </Box>
                </Box>
            </Box>

            {/* B SIDE */}
            <Box sx={bSide}>
                <Box sx={bContent}>
                    <Typography variant='body1' mb={5}>
                        {text.cvIntro}
                    </Typography>
                    <Divider sx={dividerB} />
                    {/* WORK EXPERIENCE */}
                    <Box sx={session}  mt={4} mb={2}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                {text.workExperience}
                            </Typography>
                        </Box>
                        <Box sx={columnB} mb={1}>
                        { text.workList.map(item => <WorkItem key={item.id} title={item.title} company={item.company} period={item.period} />)}
                        </Box>
                    </Box>
                    <Divider sx={dividerB} />
                    {/* EDUCATION    */}
                    <Box sx={session}  mt={4}>
                        <Box sx={columnA}>
                            <Typography variant='body2' sx={sessionTitle}>
                                {text.education}
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
                                {text.certification}
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body1' sx={sessionSubTitle}>
                                CS50’s Web Programming with Python and Java Script
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
                                {text.languages}
                            </Typography>
                        </Box>
                        <Box sx={columnB}>
                            <Typography variant='body1' sx={sessionSubTitle}>
                                {text.portuguese}
                            </Typography>  
                            <Typography variant='body2' mb={2}>                              
                                {text.motherTongue}
                            </Typography>
                            <Typography variant='body1' sx={sessionSubTitle}>
                                {text.spanish}
                            </Typography>
                            <Typography variant='body2' mb={2}>                              
                                {text.fluent}
                            </Typography>
                            <Typography variant='body1' sx={sessionSubTitle}>
                                {text.english}
                            </Typography>
                            <Typography variant='body2'>                              
                                {text.fluent}
                            </Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box sx={cSide}>
                <Box sx={[session, {justifyContent: 'space-between'}]} mt={4} mb={3}>
                    <Typography variant='body2' sx={[sessionTitle, skillTitle ]}>
                        {text.technicalSkills}
                    </Typography>
                    <Box sx={{width: '25rem'}}>
                        <IconsApps />
                    </Box>
                </Box>
                { skillList.map(item => <SkillItem key={item.id} skill={item.skill} percentage={item.percentage} />)}
                <br/><br/>
                <Divider sx={dividerA}/>
                {/* INTERESTS */}
                <Box sx={[session, {justifyContent: 'space-between'}]} mt={5}>
                    <Typography variant='body2' sx={[sessionTitle, skillTitle ]}>
                        {text.interests}
                    </Typography>
                    <Box sx={{width: '25rem'}} mb={2}>
                    <IconsInterests />
                    </Box>
                </Box>
            </Box>
        </Fragment>
    )
}

export default CVMobile;

//STYLES

const personalLink = theme => ({
    display: 'flex',
    justifyContent: 'flex-end',
    height: '3rem',
    alignItems: 'center',
    cursor: 'pointer',
    transform: 'translateY(-1rem)',
    
    '&:hover': {
        color: theme.palette.secondary.main,
        textDecoration: 'none'
    }
})

const personalInfo = theme => ({
    display: 'flex',
    alignItems: 'center',
    height: '2rem',
})

const socialLinks = theme => ({
    transform: 'translateY(1.5rem)'
})

const dividerB = theme => ({borderTop: `.2px solid ${theme.palette.primary.main}`})
const dividerA = theme => ({borderTop: `.2px solid ${theme.palette.secondary.main}`})

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
})

const sessionSubTitle = theme =>({
    fontWeight: '700',
    letterSpacing: '.1rem'
})

const columnA = theme =>({
    width: '30%',
})

const columnB = theme =>({
    width: '70%',
    paddingLeft: '3rem'
})

const session = theme =>({
    display: 'flex',
})

const aContent = theme => ({
    display: 'flex',
    justifyContent: 'space-between'
})

const aSide = theme => ({
    width: '100%',
    height: '26rem',
    minWidth: '40rem',
    padding: '4rem 3rem 3rem 3rem',
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main,
})

const bContent = theme => ({
    margin: '0 auto',
})

const bSide = theme => ({
    marginTop: '2rem',
    minWidth: '40rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    color: theme.palette.text.primary,
    padding: '3rem'
})

const cSide = theme => ({
    marginTop: '1rem',
    minWidth: '40rem',
    width: '100%',
    padding: '2rem 3rem',
    background: theme.palette.primary.main,
    color: theme.palette.secondary.main
})
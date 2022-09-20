
import { Box, Typography } from '@mui/material';
import SkillBar from './SkillBar.component';
import { PageContext } from '../../contexts/Page.context';
import { useContext } from 'react';

const SkillItem = props => {
    const { width } = useContext(PageContext);
    return (
           <Box sx={[session, skill]}>
                <Typography variant='body2' sx={skillTitle}>
                    {props.skill}
                </Typography>
                { width < 500
                ? 
                <Box sx={{width: '25rem', height: '100%', display: 'flex', alignItems:'center'}} >
                    <SkillBar percentage={props.percentage} /> 
                </Box>
                :
                <Box sx={{width: width < 1000 ? '15rem' : '20rem', height: '100%', display: 'flex', alignItems:'center'}} >
                    <SkillBar percentage={props.percentage} /> 
                </Box>
                }
                
            </Box>
    )
}

export default SkillItem;

const skill = theme => ({
    height: '2rem',
    justifyContent: 'space-between',
    alignContent: 'center',
    marginBottom: '.75rem'
})

const skillTitle = theme => ({
    fontWeight: '700',
    color: theme.palette.secondary.main,
    width: '35%',
    [theme.breakpoints.down('laptop')]: { width: '40%'},
    letterSpacing: '0',
    textAlign: 'left',
})

const session = theme =>({
    display: 'flex',
})
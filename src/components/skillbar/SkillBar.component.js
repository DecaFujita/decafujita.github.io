import { Box } from "@mui/material"
import { useContext } from 'react';
import { PageContext } from '../../contexts/Page.context';

const SkillBar = props => {
    const { width } = useContext(PageContext);
    return (
        <Box sx={[bar, {height: width < 500 ? '.7rem' : '.8rem'}]}>
            <Box sx={[juice, {width: props.percentage}]}/>
        </Box>
    )
}

export default SkillBar;

const bar = theme => ({
    width: '100%',
    borderRadius: '5rem',
    border: `1px solid ${theme.palette.secondary.main}`,
    display: 'flex',
    justifyContent: 'flex-start'
})

const juice = theme => ({
    height: '100%',
    borderRadius: '5rem',
    background: theme.palette.secondary.main
})


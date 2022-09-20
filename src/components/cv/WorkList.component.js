import { Box, Typography } from '@mui/material';
import { Fragment } from 'react';

const WorkItem = props => {
    return (
        <Fragment>
            <Typography variant='body1' sx={sessionSubTitle}>
                {props.title}
            </Typography>
            <Typography variant='body2'  mb={2}>
                {props.company}<br/>
                {props.period}
            </Typography>
        </Fragment>
    )
}

export default WorkItem;

const sessionSubTitle = theme =>({
    fontWeight: '700',
    letterSpacing: '.1rem'
})
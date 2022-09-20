import { Box, Switch } from '@mui/material';

import * as React from 'react';
import { alpha, styled } from '@mui/material/styles';
import { yellow } from '@mui/material/colors';

const label = { inputProps: { 'aria-label': 'Dark mode switch' } };

const SwitchMode = props => { 

  // const theme = useTheme();
  return (
    <Box sx={{display: 'flex', alignItems: 'center'}} mr={1}>
      <ModeSwitch onChange={props.handleChange} {...label} size='small'/>
    </Box>
  );
}

export default SwitchMode;

const ModeSwitch = styled(Switch)(({ theme }) => ({
  '& .MuiSwitch-switchBase.Mui-checked': {
    color: yellow[600],
    '&:hover': {
      backgroundColor: alpha(yellow[600], theme.palette.action.hoverOpacity),
    },
  },
  '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
    backgroundColor: yellow[600],
  },
}));



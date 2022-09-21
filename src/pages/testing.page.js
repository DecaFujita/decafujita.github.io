import { Box } from '@mui/material';
import { useContext, useState } from 'react';
import { LangContext } from '../contexts/Lang.context';
import { texts } from '../texts/texts';
import LangMenu from '../components/menus/LangMenu.component'; 

const Testing = props => {
    const { isLang, setIsLang, isOpen, setIsOpen } = useContext(LangContext);
    const testingTexts = texts[isLang];


    return (
        <Box sx={testing}>
            <LangMenu isOpen={isOpen} setIsOpen={setIsOpen} isLang={isLang} setIsLang={setIsLang} />
            {testingTexts.intro1}
        </Box>
    )
}

export default Testing;

const testing = theme => ({
    width: '100vw',
    height: '100vh',
    paddingTop: '5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
})

const stroke = theme => ({
    height: '35px',
    width: '80px',
    borderRadius: '100px',
    // background: 'red',
    border: `1px solid ${theme.palette.background.default}`, 
    zIndex: 2
    
})
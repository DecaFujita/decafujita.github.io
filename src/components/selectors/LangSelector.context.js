import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import { LangContext } from '../../contexts/Lang.context';


const LangSelector = () => {
    const { isLang, setIsLang } = useContext(LangContext);

    const handleChange = (event) => {
        setIsLang(event.target.value);
    };
    return (
        <Box>
            <select style={selectStyles} onChange={handleChange}>
                <option value="eng">English</option>
                <option value="por">Português</option>
                <option value="esp">Español</option>
            </select>
        </Box>
    );
}

export default LangSelector;

const selectStyles = {
    appearance: 'none',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0 1em 0 0',
    margin: 0,
    width: '100%',
    fontFamily: 'inherit',
    fontSize: 'inherit',
    cursor: 'inherit',
    lineHeight: 'inherit',

}
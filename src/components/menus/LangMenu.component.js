import { Box, Typography } from '@mui/material';
import { useRef, useContext, Fragment } from 'react';
import { Transition } from 'react-transition-group';
import { FlagEng, FlagPor, FlagEsp } from '../buttons/FlagsBtns';
import { LangContext } from '../../contexts/Lang.context';
import { ThemeContext } from '@emotion/react';

const LangMenu = props => {
    const ref = useRef();
    const { isLang, setIsLang, isOpen, setIsOpen } = useContext(LangContext);
    // const flags = ['English', 'Português', 'Español'];
    return (
            <Transition
                in={isOpen}
                timeout={500}
                nodeRef={ref}
            >
                {state => (
                    <Box sx={langMenu}  onClick={() => setIsOpen(!isOpen)} onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
                        {isLang === 'English' && 
                                <Fragment>
                                    <Box sx={[flagStyle, {...centerFlag}]}><FlagEng isLang={isLang} setIsLang={setIsLang} setIsOpen={setIsOpen}/></Box>
                                    <Box sx={[flagStyle, {...leftFlag, ...leftFlagAnim[state]}]}><FlagPor isLang={isLang} setIsLang={setIsLang} setIsOpen={setIsOpen}/></Box>
                                    <Box sx={[flagStyle, {...rightFlag, ...rightFlagAnim[state]}]}><FlagEsp isLang={isLang} setIsLang={setIsLang} setIsOpen={setIsOpen}/></Box>
                                </Fragment>
                        }
                        {isLang === 'Português' && 
                            <Fragment>
                                <Box sx={[flagStyle, {...centerFlag}]}><FlagPor isLang={isLang} setIsLang={setIsLang}/></Box>
                                <Box sx={[flagStyle, {...leftFlag, ...leftFlagAnim[state]}]}><FlagEng isLang={isLang} setIsLang={setIsLang} setIsOpen={setIsOpen}/></Box>
                                <Box sx={[flagStyle, {...rightFlag, ...rightFlagAnim[state]}]}><FlagEsp isLang={isLang} setIsLang={setIsLang} setIsOpen={setIsOpen}/></Box>
                            </Fragment> 
                        }
                        {isLang === 'Español' && 
                            <Fragment>
                                <Box sx={[flagStyle, {...centerFlag}]}><FlagEsp isLang={isLang} setIsLang={setIsLang}/></Box>
                                <Box sx={[flagStyle, {...leftFlag, ...leftFlagAnim[state]}]}><FlagPor isLang={isLang} setIsLang={setIsLang} setIsOpen={setIsOpen}/></Box>
                                <Box sx={[flagStyle, {...rightFlag, ...rightFlagAnim[state]}]}><FlagEng isLang={isLang} setIsLang={setIsLang} setIsOpen={setIsOpen}/></Box>
                            </Fragment>
                        }
                    </Box>
                )}
            </Transition> 
    )
}

export default LangMenu;


// const flagStyle = {
//     width: '2.4rem',
//     height: '2.4rem',
//     cursor: 'pointer',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     margin: '5px',
//     border: '13px solid transparent',
// }


const flagStyle = theme => ({
    width: '2.4rem',
    height: '2.4rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '5px',
    border: '15px solid transparent',
    '&:hover': { 
        border: `15px solid ${theme.palette.primary.main}`
    }
})

const centerFlag = {zIndex: '2', transition: 'all .5s linear'}
const leftFlag = {transform: 'scale(0)', position: 'absolute', transition: 'all .5s linear'}
const rightFlag = {transform: 'scale(0)', position: 'absolute', transition: 'all .5s linear'}

const leftFlagAnim = {
    entering: {},
    entered: {transform: 'scale(1) translateX(-3.2rem)', transition: 'all .5s linear'},
    exiting: {transform: 'scale(1) translateX(-3.2rem)'},
    exited: {transform: 'scale(1) translateX(0)', transition: 'all .2s linear'}

}
const rightFlagAnim = {
    entering: {},
    entered: {transform: 'scale(1) translateX(3.2rem)', transition: 'all .5s linear'},
    exiting: {transform: 'scale(1) translateX(3.2rem)'},
    exited: {transform: 'scale(1) translateX(0)', transition: 'all .2s linear'}
}


const langMenu = theme => ({
    display: 'flex',
    justifyContent: 'center',
    width: '8rem',
    transform: 'scale(.8)'
})

const drop = theme => ({
    display: 'block',
    background: 'green'
})



const dotAnim = {
    entering: { },
    entered: { background: 'green' },
    exiting: { background: 'green' },
    exited: { background: 'red' }
}

const dot = {
    background: 'red'
}

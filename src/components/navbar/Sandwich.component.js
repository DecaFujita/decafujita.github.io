import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useRef, useContext } from 'react';
import { Transition } from 'react-transition-group';
import { PageContext } from '../../contexts/Page.context';

const Sandwich = props => {
    const ref = useRef(null);
    const { isOpen, setIsOpen } = useContext(PageContext);
    const handleClick = () => { setIsOpen(!isOpen); } 

    return (
        <Box onClick={props.handleClick}>
            <Box sx={sandwich}>
                <Box sx={[sandwichTab, { transform: props.isOpen && 'rotate(45deg) translateY(5px) translateX(5.5px)'}]}/>
                <Box sx={[sandwichTab, { opacity: props.isOpen && '0'}]}/>
                <Box sx={[sandwichTab, { transform: props.isOpen && 'rotate(-45deg) translateY(-5px) translateX(5.5px)'}]}/>
            </Box>
            <Transition
                in={props.isOpen}
                timeout={{enter: 300, exit: 100}}
                nodeRef={ref}
                mountOnEnter
                // unmountOnExit
            >
                {state => (
                    <Box sx={[menuBox, {...menuAnim[state]}]}>
                        <Box red={ref} id='menu' sx={[menu]}>
                            <NavLink exact='true' to='/' style={({isActive}) => ({color: isActive && '#ffffff'})} onClick={handleClick} href='/home'>Home</NavLink>
                            <NavLink exact='true' to='/portfolio'  style={({isActive}) => ({color: isActive && '#ffffff'})} onClick={handleClick} href='/portafolio.html'>Portfolio</NavLink>
                            <NavLink exact='true' to='/cv'  style={({isActive}) => ({color: isActive && '#ffffff'})} onClick={handleClick} href='/cv'>Curriculum</NavLink>
                        </Box>
                    </Box>  
                )}
            </Transition>
        </Box>
    )
}


//STYLES
const menuItemAnim = {
    entering: {opacity:0, transform: 'translateY(-40px)' },
    entered: {opacity:1, transform: 'translateY(0px)', transition: 'all .3s linear', webkitTransition: 'all .3s linear'},
    exiting: {opacity:1, transform: 'translateY(0px)' },
    exited: {opacity:0, transform: 'translateY(-40px)', transition: 'all .3s linear',  webkitTransition: 'all .3s linear' },
  }

  const menuAnim = {
    entering: { transform: 'translateX(100vw)' },
    entered: { transform: 'translateX(0rem)', transition: 'all .5s linear', webkitTransition: 'all .5s linear' },
    exiting: { transform: 'translateX(0rem)' },
    exited: { transform: 'translateX(100vw)', transition: 'all .5s linear', webkitTransition: 'all .5s linear' },
  }

const sandwich = theme => ({
    display: 'flex',
    height: '5.3rem',
    padding: '1.6rem 0',
    marginLeft: '3rem',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    zIndex: '-10',
})

const sandwichTab = theme => ({
    height: '.25rem',
    width: '2.5rem',
    borderRadius: '1rem',
    background: theme.palette.text.secondary,
    transition: 'all .2s linear',
    webkitTransition: 'all .2s linear'
})

const menuBox = theme => ({
    width: '100%',
    minWidth: '40rem',
    position: 'absolute',
    right: '0',
    top: '5rem',
    [theme.breakpoints.down('mobile')]: { top: '6rem' },
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    background: theme.palette.primary.main,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
})

const menu = theme => ({
    width: '100%',
    height: '20rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    fontSize: '3rem',
    transition: 'all .2s linear',
    transform: 'translateY(-10rem)',
    '& a': { marginTop: '1rem', textDecoration: 'none', borderBottom: `1.5px solid transparent`, transition: 'all .2s linear' },
    '& a:link, a:visited': { color: theme.palette.secondary.main, borderBottom: `2px solid transparent`, transition: 'all .2s linear' },
    '& a:hover': { borderBottom: `2px solid white`, fontWeight: '700' }
})

export default Sandwich;
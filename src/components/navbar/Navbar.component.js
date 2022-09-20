import { Box } from '@mui/material';
import { NavLogo, NavLogoNeg } from '../navbar/NavLogo';
import { useState, useEffect, useRef, useContext} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Sandwich from './Sandwich.component';
import { PageContext } from '../../contexts/Page.context';
import { useTheme } from '@mui/material/styles';
import { ScrollToTop } from '../../utils';
import SunnySwt from '../switches/SunnySwt.component';
import LangMenu from '../menus/LangMenu.component';

const Navbar = props => {
    const scrollRef = useRef(false);
    const [ scrollTop, setScrollTop ] = useState(0);
    const navigate = useNavigate();
    const goTo = (path) => { navigate(path) }
    const  { isOpen, setIsOpen, width } = useContext(PageContext);

    // Open-close sandwich menu
    const handleClick = () => { setIsOpen(!isOpen) }
    const activeColor = useTheme().palette.primary.main;
    ScrollToTop();
      
    // Show navbar background on scroll down
    useEffect(() => {
      const onScroll = () => {
        let currentPosition = window.pageYOffset; // document.documentElement.scrollTop;
        setScrollTop(currentPosition <= 0 ? 0 : currentPosition);
      }
  
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Hide navbar background on scroll up
    useEffect(() => {
      if (scrollTop >= 100) { scrollRef.current = true }
      else { scrollRef.current = false }
    }, [scrollTop])
   
    return (
      <Box sx={navbar}>
        <Box sx={navlogo} onClick={() => goTo('/')}>
          {props.isDarkMode ? <NavLogoNeg colour={activeColor}/> : <NavLogo colour={activeColor}/>}
        </Box>
        
        <Box sx={{ display: 'flex', alignItems: 'center'}}>
          <SunnySwt handleChange={props.switchMode} isDarkMode={props.isDarkMode}/>
          <LangMenu />
          {/* <SwitchMode handleChange={props.switchMode} /> */}
            { width < 700 // tablet portrait
              ? 
                <Sandwich handleClick={handleClick} isOpen={isOpen}  />
              :
              <Box sx={menu}>
                <NavLink exact='true' to='/' style={({isActive}) => ({color: isActive && activeColor })} href='/'>Home</NavLink>
                <NavLink exact='true' to='/portfolio' style={({isActive}) => ({color: isActive && activeColor })}  href='/portfolio.html'>Portfolio</NavLink>
                <NavLink exact='true' to='/cv' style={({isActive}) => ({color: isActive && activeColor })}  href='/cv'>Curriculum</NavLink>
              </Box>
            }
        </Box>
      </Box>
    )
};


//STYLES

const navbar = theme => ({
    position: 'fixed',
    top: 0,
    paddingLeft: '3rem',
    paddingRight: '3rem',
    width: '100%',
    minWidth: '40rem',
    height: '5rem',
    [theme.breakpoints.down('mobile')]: {
      height: '6rem'
    },
    background: theme.palette.background.default,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.divider}`,
    zIndex: 1
})

const navlogo = theme => ({
    height: '80%',
    display: 'flex',
    alignItems: 'center'
    // [theme.breakpoints.down('laptop')]: { // change it to mobile later! 
    //   width: '20rem',
    //   marginLeft: '2rem', 
    // }, 
})

const menu = theme => ({
    display: 'flex',
    width: '25rem',
    justifyContent: 'space-between',
    fontSize: '1rem',
    fontFamily: 'Raleway',
    fontWeight: '700',
    letterSpacing: '.1rem',
    textTransform: 'uppercase',
    color: theme.palette.text.secondary,
    transform: 'translateY(.2rem)',
    marginLeft: '2rem',
    '& a': {
        textDecoration: 'none',
        cursos: 'pointer',
        transition: 'border .5s linear',
        // webkitTransition: 'border .5s linear',
        borderBottom: '1.5px solid rgba(255,255,255,0)',
        // marginLeft: '4rem'
    },
    '& a:link, a:visited': {
        color: theme.palette.text.secondary,
        transition: 'border .5s linear',
        // webkitTransition: 'border .5s linear',
    // borderBottom: '1.5px solid rgba(255,255,255,0)',
    },
    '& a:hover': {
      borderBottom: `1.5px solid ${theme.palette.primary.main}`,
      // color: theme.palette.primary.light
    }
})

export default Navbar;

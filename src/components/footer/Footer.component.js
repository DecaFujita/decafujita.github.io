import { Box, Link } from '@mui/material';
import { SocialIcoCodePen, SocialIcoLinkedIn, SocialIcoGitHub } from '../icons/Icons';
import { useTheme } from '@mui/material/styles';

const Footer = props => {
    const theme = useTheme();

    return (
        <Box sx={footer}>
            <Box sx= {sociallinks}>
                <Link sx={linkBtn} href="https://codepen.io/decafujita" target="_blank">
                    <SocialIcoCodePen fill={theme.palette.text.primary} />
                </Link>
                <Link sx={linkBtn} href="https://github.com/DecaFujita" target="_blank">
                    <SocialIcoGitHub fill={theme.palette.text.primary}/>
                </Link>
                <Link sx={linkBtn} href="https://cl.linkedin.com/in/deca-fujita-71032249" target="_blank">
                    <SocialIcoLinkedIn fill={theme.palette.text.primary}/>
                </Link>
            </Box>
        </Box>
    )
}
export default Footer;

const footer = theme => ({
    width: '100%',
    height: '5rem',
    padding: '0 3rem 0 3rem',
    // position: 'fixed',
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    // [theme.breakpoints.down('mobile')]: {
    //     PaddingBottom: '2rem'
    // }
}) 

const sociallinks = theme => ({
    width: '15rem',
    height: '3rem',
    display: 'flex',
    justifyContent: 'space-between'
}) 

const linkBtn = theme => ({
    height:'inherit',
    cursor: 'pointer'
})
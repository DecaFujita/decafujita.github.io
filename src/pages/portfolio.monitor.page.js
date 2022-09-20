import { Box } from '@mui/material';
import MonitorBackground from '../img/MonitorBackground.png';
import MonitorMobile from '../img/MonitorMobile.png';
import MonitorStyle from '../img/MonitorStyle.png';


const MonitorPage = props => {
    return (
        <Box sx={container}>
            <Box sx={img1}>
                <Box sx={img1Content1} />
                <Box sx={img1Content2} />
            </Box>
            <Box sx={img2}>
                <Box sx={img2Content}/> 
            </Box>
        </Box>
    )
}

export default MonitorPage;

const img1Content1 = thene => ({
    width: '50rem',
    height: '40rem',
    backgroundImage:  `url(${MonitorMobile})`,
    backgroundSize: '42rem auto',
    backgroundRepeat: 'no-repeat'
})
const img1Content2 = thene => ({
    width: '50rem',
    height: '50rem',
})

const img2Content = theme => ({
    width: '100rem',
    height: '88rem',
    backgroundImage:  `url(${MonitorStyle})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
})
 
const img1 = theme => ({
    width: '100%',
    height: '50rem',
    backgroundImage: `url(${MonitorBackground})`,
    backgroundSize: '120% auto',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundRepeat: 'no-repeat',
    zIndex: 2
})
const img2 = theme => ({
    width: '100%',
    height: '85rem',
    background: '#4da9a3',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '3rem',
})

const container = theme => ({
    width: '100%',
    marginTop: '3rem',
});


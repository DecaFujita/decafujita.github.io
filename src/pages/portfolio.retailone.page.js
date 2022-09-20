import { Box } from '@mui/material';
import RetailOneImg from '../img/RetailOne2.png';


const RetailOne = props => {
    return (
        <Box sx={container}>
            <Box sx={img}>
                <Box component="img" src={RetailOneImg} sx={imgContent}/>
            </Box>
        </Box>
    )
}

export default RetailOne;

const imgContent = theme => ({
    width: '90%',
    maxWidth: '100rem',
    height: 'auto',
    // backgroundImage: `url(${RetailOneImg})`,
    // backgroundSize: '100% auto',
    
})
 
const img = theme => ({
    width: '100%',
    background: 'linear-gradient(180deg, rgba(185,141,28,0) 0%, rgba(185,141,28,0) 10%, rgba(185,141,28,1) 10%, rgba(185,141,28,1) 100%)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: '5rem',
})

const container = theme => ({
    width: '100%',
    marginTop: '5rem',
});


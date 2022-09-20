import { Box } from '@mui/material';

import Cruzada1 from '../img/Cruzada1.jpg';
import Cruzada2 from '../img/Cruzada2.png';



const CruzadaPage = props => {
    return (
        <Box sx={container}>
            <Box component="img" src={Cruzada1} sx={img}/>
            <Box component="img" src={Cruzada2} sx={img} />
        </Box>
    )
}

export default CruzadaPage;

const img = theme => ({
    maxWidth: '100rem',
    width: '100%',
    margin: '0 auto',
    marginBottom: '2rem'
})

const img2 = theme => ({
    width: '100rem',
    height: '45rem',
    margin: '0 auto',
    marginTop: '1.5rem',
    backgroundImage: `url(${Cruzada1})`,
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center'
})

const img1 = theme => ({
    width: '100rem',
    height: '76.8rem',
    margin: '0 auto',
    marginTop: '1.5rem',
    backgroundImage: `url(${Cruzada2})`,
    backgroundSize: 'auto 100%',
    backgroundPosition: 'center'
})


const container = theme => ({
    width: '100%',
    marginTop: '3rem',
    paddingBottom: '5rem'
});


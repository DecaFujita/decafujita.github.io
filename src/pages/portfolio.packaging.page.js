import { Box } from '@mui/material';

import Packaging1 from '../img/portfolio-packaging-cnc.jpg';
import Packaging2 from '../img/portfolio-packaging-babylee.jpg';
import Packaging3 from '../img/portfolio-packaging-estarbien.jpg';
import Packaging4 from '../img/portfolio-packaging-mida.jpg';
import Packaging5 from '../img/portfolio-packaging-petverde.jpg';
import Packaging6 from '../img/portfolio-packaging-sneck.jpg';
import Packaging7 from '../img/portfolio-packaging-wrapioca.jpg';

const PackagingPage = props => {
    return (
        <Box sx={container}>
            <Box component="img" src={Packaging1} sx={img} />
            <Box component="img" src={Packaging2} sx={img} />
            <Box component="img" src={Packaging3} sx={img} />
            <Box component="img" src={Packaging4} sx={img} />
            <Box component="img" src={Packaging5} sx={img} />
            <Box component="img" src={Packaging6} sx={img} />
            <Box component="img" src={Packaging7} sx={img} />
        </Box>
    )
}

export default PackagingPage;

const img = theme => ({
    maxWidth: '100rem',
    width: '100%',
    margin: '0 auto',
    marginBottom: '2rem'
})
const container = theme => ({
    width: '100%',
    marginTop: '3rem',
    paddingBottom: '5rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
});


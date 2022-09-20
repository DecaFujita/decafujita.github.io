import { Box } from '@mui/material';
import { Fragment } from 'react';

import Klauben1 from '../img/Klauben1.png';
import Klauben2 from '../img/Klauben2.png';
import Klauben3 from '../img/Klauben3.jpg';
import Klauben4 from '../img/Klauben4.jpg';


const KlaubenPage = props => {
    return (
        <Fragment>
            <Box component="img" src={Klauben1} sx={img} />
            <Box component="img" src={Klauben3} sx={img} />
            <Box component="img" src={Klauben2} sx={img} />
            <Box component="img" src={Klauben4} sx={img} />
        </Fragment>
    )
}

export default KlaubenPage;

const img = theme => ({
    maxWidth: '100rem',
    width: '100%',
    margin: '.5rem auto'
})

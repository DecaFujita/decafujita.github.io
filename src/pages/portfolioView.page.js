
import { useParams } from 'react-router-dom';
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import MonitorPage from '../pages/portfolio.monitor.page';
import KlaubenPage from '../pages/portfolio.klauben.page';
import CruzadaPage from '../pages/portfolio.cruzada.page';
import RetailOnePage from '../pages/portfolio.retailone.page';
import MobdiqPage from '../pages/portfolio.mobdiq.page';
import PackagingPage from '../pages/portfolio.packaging.page';
import { portfolioContentList } from './portifolio.content';
import GoBackBtn from '../components/buttons/GoBackBtn.component';
import { ScrollToTop } from '../utils';

const PortfolioView = props => {
    const { id } = useParams();
    const project = portfolioContentList.find(project => project.id === `project${id}`);
    const tags = project.tags;
    const DarkMode = props.isDarkMode;   
    ScrollToTop();

    return (
        <Box sx={container}>
            <Box sx={back}>
                <GoBackBtn />
            </Box>
            <Box sx={intro}>
                <Box sx={introSideA}>
                    <Box mb={2}>
                        <Typography variant='h6' sx={client}>{project.client}</Typography>
                        <Typography variant='h4'>{project.project}</Typography>
                        <Typography variant='body1' sx={description}>
                            {project.description}
                        </Typography>
                    </Box>
                    <Box sx={[tagList, {color: project.color}]}>
                        {tags.map(tag => <Typography key={`key${project.project}${tag}`} variant='body1' sx={tagsStyle}>{tag}</Typography>)}
                    </Box>
                </Box>
                <Box component="img" src={DarkMode ? project.mainPicNeg : project.mainPic } sx={introSideB} />
                {/* <Box sx={[introSideB, {backgroundImage: DarkMode ? `url(${project.mainPicNeg})` : `url(${project.mainPic})`}]} /> */}
            </Box>
            <Box sx={imgs}>
                {project.id === 'project1' && <MonitorPage />}
                {project.id === 'project2' && <MobdiqPage />}
                {project.id === 'project3' && <PackagingPage />}
                {project.id === 'project4' && <KlaubenPage />}
                {project.id === 'project5' && <CruzadaPage />}
                {project.id === 'project6' && <RetailOnePage />}
                {project.id === 'project7' && <PackagingPage />}
            </Box>

        </Box>
    )
}

export default PortfolioView;

// STYLES

const back = theme => ({
    width: '100%',
    maxWidth: '100rem',
    margin: '0 auto',
    marginBottom: '5rem',
    [theme.breakpoints.down('laptop')]: { 
        padding: '0 2rem',
    },
    [theme.breakpoints.down('mobile')]: { 
        padding: '2rem 3rem' ,
        // marginBottom: '1rem',
    }
})

const client = theme => ({
    fontWeight: '600'
})

const description = theme => ({
    marginTop: '5rem',
    [theme.breakpoints.down('laptop')]: {
        marginTop: '2rem'
    },
    [theme.breakpoints.down('tablet')]: {
        marginTop: '2rem',
    }
})

const tagList = theme => ({
    [theme.breakpoints.down('tablet')]: {
        display: 'flex',
        flexWrap: 'wrap',
        marginBottom: '2rem'   
    },
    [theme.breakpoints.down('mobile')]: {
        marginBottom: '3rem'   
    }
})

const tagsStyle = theme => ({
    fontWeight: '600',
    [theme.breakpoints.down('tablet')]: {marginRight: '1rem' }
})

const introSideA = theme => ({
    width: '35rem',
    paddingRight: '3rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    color: theme.palette.text.primary,
    [theme.breakpoints.down('tablet')]: {
        width: '100%',
        padding: '0 3rem',
    }
})

const introSideB = theme => ({
    width: '65rem',
    justifyContent: 'flex-start',
    backgroundSize: '100% auto',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    [theme.breakpoints.down('tablet')]: {
        width: '100%',
    }
})

const intro = theme => ({
    width: '100vw',
    maxWidth: '100rem',
    margin: '0 auto',
    minHeight: '40rem',
    display: 'flex',
    [theme.breakpoints.down('laptop')]: { 
        padding: '0 2rem',
    },
    [theme.breakpoints.down('tablet')]: { 
        display: 'block'
    }
})

const container = theme => ({
    width: '100%',
    minWidth: '40rem',
    minHeight: '100vh',
    paddingTop: '10rem',
    [theme.breakpoints.down('tablet')]: { 
        paddingTop: '7rem',
    }
})

const imgs = theme => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '3rem 0 0 0',
    // [theme.breakpoints.down('laptop')]: { 
    //     padding: '3rem 2rem',
    // },
})
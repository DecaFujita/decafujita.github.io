import MonitorDesk from '../img/MonitorDesk.png';
import KlaubenMain from '../img/KlaubenMain.png';
import RetailOneMain from '../img/RetailOneMain.jpg';
import CruzadaLogo from '../img/CruzadaLogo.png';
import CruzadaLogoNeg from '../img/CruzadaLogoNeg.png';
import MobdiqMain from '../img/MobdiqMain.png';
import MobdiqMainNeg from '../img/MobdiqMainNeg.png';
import PackagingMain from '../img/PackagingMain.png';
import PackagingMainNeg from '../img/PackagingMain_neg.png';

export const portfolioContentList = [
    {
        id: 'project1',
        client: 'Monitor Legistalivo',
        project: 'Website',
        description: {
            English: "User Interface for mobile and desktop website, style guide and static codes.",
            Português: "Design de interface em versões desktop e mobile, guia de estilos e códigos estáticos.",
            Español: "Diseño de interfaz en versiones desktop y mobile, guia de estilos y códigos estáticos."
        },
        tags: ['user interface', 'front end'],
        mainPic: MonitorDesk,
        mainPicNeg: MonitorDesk,
        color: '#4da9a3'
    },
    {
        id: 'project2',
        client: 'Mobdiq',
        project: 'Website',
        description: {
            English: "User Interface for mobile and desktop website. Developed and hosted on Wordpress.",
            Português: "Design de interface em versões desktop e mobile. Desenvolvido em Wordpress.",
            Español: "Diseño de interfaz en versiones desktop y mobile. Desarrollado en Wordpress."
        },
        tags: ['user interface', 'wix'],
        mainPic: MobdiqMain,
        mainPicNeg: MobdiqMainNeg,
        color: '#00A1E0'
    },
    {
        id: 'project3',
        client: '',
        project: 'Packaging + Branding',
        description: {
            English: "Selection of various branding and packaging projects",
            Português: "Seleção de vários projetos de branding e embalagem",
            Español: "Selección de distintos proyectos de branding y packaging"
        },
        tags: [],
        mainPic: PackagingMain,
        mainPicNeg: PackagingMainNeg,
        color: '#E99380'
    },
    {
        id: 'project4',
        client: 'Cencosud',
        project: 'Kläuben',
        description: {
            English: "Klaüben is Cencosud's own brand for premium appliances. The project consisted of branding creation, packaging design and point of purchase communication, as well as material for the website and social media.",
            Português: "Klaüben é uma marca própria premium de Cencosud para eletrodomésticos. O projeto consistiu na criação da marca, linha de embalagem, material de comunicação para ponto de venda, website e midias sociais.",
            Español: "Klaüben es una marca premium propia de Cencosud para electrodomésticos. El proyecto incluyó la creación de la marca, línea de envases, material de comunicación para punto de venta, sitio web y redes sociales."
        },
        tags: ['branding','packaging','pop','user interface','social media'],
        mainPic: KlaubenMain,
        mainPicNeg: KlaubenMain,
        color: '#E99380'
    },
    {
        id: 'project5',
        client: 'Rede Cruzada',
        project: 'Logo + Website',
        description: {
            English: "User Interface and branding for Rede Cruzada, a Non-governmental organization located in Rio de Janeiro.",
            Português: "Design de interface e marca para Rede Cruzada, a ONG localizada no Rio de Janeiro",
            Español: "Diseño de interfaz y marca para Rede Cruzada, una organización no gubernamental  ubicada en Río de Janeiro"
        },
        tags: ['branding', 'user interface', 'social media'],
        mainPic: CruzadaLogo,
        mainPicNeg: CruzadaLogoNeg,
        color: '#FFA800'
    },
    {
        id: 'project6',
        client: 'RetailOne',
        project: 'Website',
        description: {
            English: "User Interface for RetailOne's mall portfolio.",
            Português: "Design de interface para o portifólio de shoppings de RetailOne",
            Español: "Diseño de interfaz para el portafolio de malls de RetailOne"
        },
        tags: ['user interface'],
        mainPic: RetailOneMain,
        mainPicNeg: RetailOneMain,
        color: '#B98D1C'
    },
]



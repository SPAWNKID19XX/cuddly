import './MainBaner.css';
import {useState} from "react";
import mainBanner from './../../assets/img/main_banner.jpg'
import fc from "./../../assets/img/fc.jpg"
import oil from "./../../assets/img/oil.jpg"
import serum from "./../../assets/img/serum.jpg"
import sunscreen from "./../../assets/img/sunscreen.jpg"
import micelar_water from './../../assets/img/micelar_water.jpg'
import {useTranslation} from "react-i18next";


interface MainBannerProps {
    title?: string;
    subtitle?: string;
    text?: string;
    slogan?: string;
}

interface ImageGalleryProps {
    images: {
        id: number;
        src: string;
        alt: string;
    }[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({images}) => {
    const [selectedImage, setSelectedImage] = useState(images[0]);
    return (
        <div className="gallery-container">
            <div className="thumbnails-container">
                {images.map((image) => (

                    <div
                        key={image.id}
                        className={`thumbnail-wrapper ${selectedImage.id === image.id ? 'active' : ''}`}
                        onClick={() =>
                            setSelectedImage(image)
                        }
                    >
                        <img
                            src={image.src}
                            alt={image.alt}
                            className="thumbnail-image"

                        />
                    </div>
                ))}
            </div>
            <div className="main-image-container">
                <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="main-image"
                    style={selectedImage.id === 5 ? {
                        width: '800px',
                        transition: "all 0.0s ease"
                    } : {}}
                />
            </div>
        </div>
    );
};

const ImageListBanner = () => {
    const images = [
        {
            id: 1,
            src: fc,
            alt: "Face cream"
        },
        {
            id: 2,
            src: oil,
            alt: "Oil"
        },
        {
            id: 3,
            src: serum,
            alt: "Serum"
        },
        {
            id: 4,
            src: micelar_water,
            alt: "Micelar Water"
        },
        {
            id: 5,
            src: sunscreen,
            alt: "SunScreen"
        },
        {
            id: 6,
            src: mainBanner,
            alt: "All_in_one"
        },
    ];

    return (
        <div>
            <ImageGallery images={images}/>
        </div>
    );
};


const MainBaner: React.FC<MainBannerProps> = () => {

    const {t} = useTranslation();
    return (
        <div className="main-banner">
            <div className="banner-content">
                <h1 className="banner-title">{t('mb.title')}</h1>
                <div className="piture-container">
                    <ImageListBanner/>
                </div>
                <div className="text_main_banner">
                    <h2 className="banner-subtitle">{t('mb.subtitle')}</h2>
                    <p className="banner-text">{t('mb.p.0')}</p>
                    <p className="banner-slogan">{t('mb.p.1')}</p>
                </div>

                {/*<button className="banner-cta">Contact us</button>*/}
            </div>
        </div>
    );
};


export default MainBaner;
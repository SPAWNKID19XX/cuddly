import {useTranslation} from "react-i18next";
import hc from "../../assets/img/handsCream.jpg";
import sc from "../../assets/img/sunscreen.jpg";
import oil from "../../assets/img/oil.jpg";
import mw from "../../assets/img/micelar_water.jpg";
import ser from "../../assets/img/serum.jpg";
import fc from "../../assets/img/fc.jpg";

const FaceBodyCare = () => {
    const {t} = useTranslation();

    interface FaceBodyCareProps {
        id: number;
        category: string;
        name: string;
        subtitle: string;
        description: string;
        vantage: string[];
        image: string;
        add_info?: string;
    }

    const FaceBodyCare: FaceBodyCareProps[] = [
        {
            id: 1,
            category: 'Face & Body Care',
            name: t('products.0.name'),
            subtitle: t('products.0.subtitle'),
            description: t('products.0.description'),
            vantage: [
                t('products.0.vantage.0'),
                t('products.0.vantage.1'),
                t('products.0.vantage.2'),
                t('products.0.vantage.3'),
                t('products.0.vantage.4')
            ],
            image: hc,
            add_info: t('products.0.add_info')
        },
        {
            id: 2,
            name: t('products.1.name'),
            category: 'Face & Body Care',
            subtitle: t('products.1.subtitle'),
            description: t('products.1.description'),
            vantage: [
                t('products.1.vantage.0'),
                t('products.1.vantage.1'),
                t('products.1.vantage.2'),
                t('products.1.vantage.3'),
                t('products.1.vantage.4')
            ],
            image: sc,
            add_info: t('products.1.add_info')
        },
        {
            id: 3,
            name: t('products.2.name'),
            category: 'Face & Body Care',
            subtitle: t('products.2.subtitle'),
            description: t('products.2.description'),
            vantage: [
                t('products.2.vantage.0'),
                t('products.2.vantage.1'),
                t('products.2.vantage.2'),
                t('products.2.vantage.3'),
                t('products.2.vantage.4')
            ],
            image: oil,
            add_info: t('products.2.add_info')
        },
        {
            id: 4,
            name: t('products.3.name'),
            category: 'Face & Body Care',
            subtitle: t('products.3.subtitle'),
            description: t('products.3.description'),
            vantage: [
                t('products.3.vantage.0'),
                t('products.3.vantage.1'),
                t('products.3.vantage.2'),
                t('products.3.vantage.3'),
                t('products.3.vantage.4')
            ],
            image: mw,
            add_info: t('products.3.add_info')
        },
        {
            id: 5,
            name: t('products.4.name'),
            category: 'Face & Body Care',
            subtitle: t('products.4.subtitle'),
            description: t('products.4.description'),
            vantage: [
                t('products.4.vantage.0'),
                t('products.4.vantage.1'),
                t('products.4.vantage.2'),
                t('products.4.vantage.3'),
                t('products.4.vantage.4')
            ],
            image: ser,
            add_info: t('products.4.add_info')
        },
        {
            id: 6,
            name: t('products.5.name'),
            category: 'Face & Body Care',
            subtitle: t('products.5.subtitle'),
            description: t('products.5.description'),
            vantage: [
                t('products.5.vantage.0'),
                t('products.5.vantage.1'),
                t('products.5.vantage.2'),
                t('products.5.vantage.3')
            ],
            image: fc,
            add_info: t('products.5.add_info')
        },
    ]


    return (
        <div className="product-main-container">
            <div className="container">
                <div className="title-container">
                    <h1>Face Body Care</h1>
                </div>
                <div className="products-description-container">
                    {
                        FaceBodyCare.map(product => (
                            <div className="product-container" key={product.id}>
                                <div className="product-image-container">
                                    <img src={product.image} alt={product.name}/>
                                </div>
                                <div className="product-description-container">
                                    <div className="prodict-title">
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>

                                        <ul>
                                            {Array.isArray(product.vantage) &&
                                                product.vantage.map(vantage => (
                                                    <li key={vantage}>{vantage}</li>
                                                ))}
                                        </ul>
                                        <p>{product.add_info}</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default FaceBodyCare;
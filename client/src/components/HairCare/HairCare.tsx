import './HairCare.css'
import sh from "../../assets/img/champoo.jpg";
import cond from "../../assets/img/cond.jpg";
import hm from "../../assets/img/hearMask.jpg";
import hcaps from "../../assets/img/hearCapsuls.jpg";
import hs from "../../assets/img/hairScrub.png";
import hserum from "../../assets/img/hairserum.png";
import {useTranslation} from "react-i18next";


const HairCare = () => {
    const {t} = useTranslation();

    interface HairCareProps {
        id: number;
        category: string;
        name: string;
        subtitle: string;
        description: string;
        vantage?: string[];
        image: string;
        add_info?: string;
        ingr?: string[];
    }

    const hairCare: HairCareProps[] = [

        {
            id: 7,
            name: t('products.6.name'),
            category: 'Hair Care',
            subtitle: t('products.6.subtitle'),
            description: t('products.6.description'),
            vantage: [
                t('products.6.vantage.0'),
                t('products.6.vantage.1'),
                t('products.6.vantage.2'),
                t('products.6.vantage.3')
            ],
            image: sh,
            add_info: t('products.6.add_info')
        },
        {
            id: 8,
            name: t('products.7.name'),
            category: 'Hair Care',
            subtitle: t('products.7.subtitle'),
            description: t('products.7.description'),
            vantage: [
                t('products.7.vantage.0'),
                t('products.7.vantage.1'),
                t('products.7.vantage.2'),
                t('products.7.vantage.3')
            ],
            image: cond,
            add_info: t('products.7.add_info')
        },
        {
            id: 9,
            name: t('products.8.name'),
            category: 'Hair Care',
            subtitle: t('products.8.subtitle'),
            description: t('products.8.description'),
            vantage: [
                t('products.8.vantage.0'),
                t('products.8.vantage.1'),
                t('products.8.vantage.2'),
                t('products.8.vantage.3')
            ],
            image: hm,
            add_info: t('products.8.add_info')
        },
        {
            id: 10,
            name: t('products.9.name'),
            category: 'Hair Care',
            subtitle: t('products.9.subtitle'),
            description: t('products.9.description'),
            vantage: [
                t('products.9.vantage.0'),
                t('products.9.vantage.1'),
                t('products.9.vantage.2'),
                t('products.9.vantage.3')
            ],
            image: hcaps,
            add_info: t('products.9.add_info')
        },
        {
            id: 11,
            name: t('products.10.name'),
            category: 'Hair Care',
            subtitle: t('products.10.subtitle'),
            description: t('products.10.description'),
            vantage: [
                t('products.10.vantage.0'),
                t('products.10.vantage.1'),
                t('products.10.vantage.2'),
                t('products.10.vantage.3')
            ],
            image: hs,
            ingr: [
                t('products.10.ingr.0'),
                t('products.10.ingr.1'),
                t('products.10.ingr.2')
            ]
        },
        {
            id: 12,
            name: t('products.11.name'),
            category: 'Hair Care',
            subtitle: t('products.11.subtitle'),
            description: t('products.11.description'),
            vantage: [
                t('products.11.vantage.0'),
                t('products.11.vantage.1'),
                t('products.11.vantage.2'),
                t('products.11.vantage.3')
            ],
            image: hserum,
            ingr: [
                t('products.11.ingr.0'),
                t('products.11.ingr.1'),
                t('products.11.ingr.2')
            ]
        },

    ]


    return (
        <div className="product-main-container">
            <div className="container">
                <div className="title-container">
                    <h1>Hair Care</h1>
                </div>
                <div className="products-description-container">
                    {
                        hairCare.map(product => (
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
                                        {product.id === 14 && (
                                            <>
                                                <h3 style={{marginTop: "25px"}}>{t('products.13.subtitle.1')}</h3>
                                                <ul>
                                                    <li>{t('products.13.ws.0')}</li>
                                                    <li>{t('products.13.ws.1')}</li>
                                                    <li>{t('products.13.ws.2')}</li>
                                                    <li>{t('products.13.ws.3')}</li>
                                                </ul>
                                                <p><strong>{t('products.13.note.0')}:</strong> {t('products.13.note.1')}
                                                </p>
                                            </>
                                        )}


                                        {product.add_info && (
                                            <p>{product.add_info}</p>
                                        )}

                                        {product.ingr && (
                                            <>
                                                <h3>Ingredients</h3>
                                                <ul>
                                                    {product.ingr.map((ing, index) => (
                                                        <li key={index}>{ing}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )}
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

export default HairCare;
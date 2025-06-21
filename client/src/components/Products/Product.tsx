import './Product.css'
import hc from './../../assets/img/handsCream.jpg'
import sc from './../../assets/img/sunscreen.jpg'
import oil from './../../assets/img/oil.jpg'
import ser from './../../assets/img/serum.jpg'
import mw from './../../assets/img/micelar_water.jpg'
import fc from './../../assets/img/fc.jpg'
import sh from './../../assets/img/champoo.jpg'
import cond from './../../assets/img/cond.jpg'
import hm from './../../assets/img/hearMask.jpg'
import hcaps from './../../assets/img/hearCapsuls.jpg'
import hs from './../../assets/img/hairScrub.png'
import hserum from './../../assets/img/hairserum.png'
import {useTranslation} from "react-i18next";

const Product = () => {


    interface Product {
        id: number;
        category: string;
        name: string;
        subtitle: string;
        description: string;
        vantage: string[];
        image: string;
        add_info?: string;
        ingr?: string[];
    }

    const {t} = useTranslation();
    const productList: Product[] = [
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
        {
            id: 13,
            name: t('products.12.name'),
            category: 'Health & Balance',
            subtitle: t('products.12.subtitle'),
            description: t('products.12.description'),
            vantage: [
                t('products.12.vantage.0'),
                t('products.12.vantage.1'),
                t('products.12.vantage.2'),
                t('products.12.vantage.3')
            ],
            image: hserum,
            ingr: [
                t('products.12.ingr.0'),
                t('products.12.ingr.1'),
                t('products.12.ingr.2')
            ]
        }

    ];

    return (
        <div className="product-main-container">
            <div className="container">
                <div className="title-container">
                    <h1>Our Products</h1>
                </div>
                <div className="products-description-container">
                    {
                        productList.map(product => (
                            <div className="product-container" key={product.id}>
                                <div className="product-image-container">
                                    <img src={product.image} alt={product.name}/>
                                </div>
                                <div className="product-description-container">
                                    <div className="prodict-title">
                                        <h2>{product.name}</h2>
                                        <p>{product.description}</p>
                                        <ul>
                                            {product.vantage.map(vantage => (
                                                <li key={vantage}>{vantage}</li>
                                            ))}
                                        </ul>
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
    )
        ;
};

export default Product;
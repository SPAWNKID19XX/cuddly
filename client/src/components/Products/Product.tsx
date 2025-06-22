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
import vit from './../../assets/img/vitamins.png'
import supl from './../../assets/img/supl.png'
import minerals from './../../assets/img/minerals.png'
import biotics from './../../assets/img/biotics.png'
import {useTranslation} from "react-i18next";

const Product = () => {


        interface Product {
            id: number;
            category: string;
            name: string;
            subtitle?: string;
            description?: string;
            list?: string[];
            vantage?: string[];
            image: string;
            add_info?: string;
            ingr?: string[];
            vit_list?: string[];
            vit_func?: {
                [vitaminKey: string]: {
                    func: string;
                    source: string;
                    de: string; // deficiency
                };
            };
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
                name: t("products.12.name"),
                category: "Health & Balance",
                vit_func: {
                    "A": {
                        func: t("products.12.vit_func.A.func"),
                        source: t("products.12.vit_func.A.source"),
                        de: t("products.12.vit_func.A.de")
                    },
                    "D": {
                        func: t("products.12.vit_func.D.func"),
                        source: t("products.12.vit_func.D.source"),
                        de: t("products.12.vit_func.D.de")
                    },
                    "E": {
                        func: t("products.12.vit_func.E.func"),
                        source: t("products.12.vit_func.E.source"),
                        de: t("products.12.vit_func.E.de")
                    },
                    "K": {
                        func: t("products.12.vit_func.K.func"),
                        source: t("products.12.vit_func.K.source"),
                        de: t("products.12.vit_func.K.de")
                    },
                    "C": {
                        func: t("products.12.vit_func.C.func"),
                        source: t("products.12.vit_func.C.source"),
                        de: t("products.12.vit_func.C.de")
                    },
                    "B1": {
                        func: t("products.12.vit_func.B1.func"),
                        source: t("products.12.vit_func.B1.source"),
                        de: t("products.12.vit_func.B1.de")
                    },
                    "B2": {
                        func: t("products.12.vit_func.B2.func"),
                        source: t("products.12.vit_func.B2.source"),
                        de: t("products.12.vit_func.B2.de")
                    },
                    "B3": {
                        func: t("products.12.vit_func.B3.func"),
                        source: t("products.12.vit_func.B3.source"),
                        de: t("products.12.vit_func.B3.de")
                    },
                    "B5": {
                        func: t("products.12.vit_func.B5.func"),
                        source: t("products.12.vit_func.B5.source"),
                        de: t("products.12.vit_func.B5.de")
                    },
                    "B6": {
                        func: t("products.12.vit_func.B6.func"),
                        source: t("products.12.vit_func.B6.source"),
                        de: t("products.12.vit_func.B6.de")
                    },
                    "B7": {
                        func: t("products.12.vit_func.B7.func"),
                        source: t("products.12.vit_func.B7.source"),
                        de: t("products.12.vit_func.B7.de")
                    },
                    "B9": {
                        func: t("products.12.vit_func.B9.func"),
                        source: t("products.12.vit_func.B9.source"),
                        de: t("products.12.vit_func.B9.de")
                    },
                    "B12": {
                        func: t("products.12.vit_func.B12.func"),
                        source: t("products.12.vit_func.B12.source"),
                        de: t("products.12.vit_func.B12.de")
                    }
                },
                image: vit,
            },
            {
                id: 14,
                name: t("products.13.name"),
                category: "Health & Balance",
                description: t("products.13.description"),
                image: supl,
            },
            {
                id: 15,
                name: "Minerals",
                category: "Health & Balance",
                description: "Minerals are inorganic substances needed by the body in small amounts to maintain health, growth, development, and normal organ function.",
                image: minerals,
            },
            {
                id: 16,
                name: "Biotics",
                category: "Health & Balance",
                description: "What Are Biotics and How Do They Help the Body?",
                image: biotics,
            }


        ];

        interface VitaminData {
            func: string;
            source: string;
            de: string;
        }

        interface VitaminsTableProps {
            vit_func: Record<string, VitaminData>;
        }


        function VitaminsTable({vit_func}: VitaminsTableProps) {
            return (
                <table className="vitamin-table">
                    <thead>
                    <tr>
                        <th className="col-vit">Vit</th>
                        <th className="col-func">Function</th>
                        <th className="col-source">Source</th>
                        <th className="col-de">Deficiency</th>
                    </tr>
                    </thead>
                    <tbody>
                    {Object.entries(vit_func).map(([vitamin, data]) => (
                        <tr key={vitamin}>
                            <td className="col-vit">{vitamin}</td>
                            <td className="col-func">{data.func}</td>
                            <td className="col-source">{data.source}</td>
                            <td className="col-de">{data.de}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            );
        }

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
                                            {product.id === 14 && (
                                                <>
                                                    <h3 style={{marginTop: "25px"}}>{t('products.13.subtitle.0')}</h3>

                                                    <ul>
                                                        <li>
                                                            <strong>{t('products.13.mf.0.title')}</strong> – {t('products.13.mf.0.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.1.title')}</strong> – {t('products.13.mf.1.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.2.title')}</strong> – {t('products.13.mf.2.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.3.title')}</strong> – {t('products.13.mf.3.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.4.title')}</strong> – {t('products.13.mf.4.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.5.title')}</strong> – {t('products.13.mf.5.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.6.title')}</strong> – {t('products.13.mf.6.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.7.title')}</strong> – {t('products.13.mf.7.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.8.title')}</strong> – {t('products.13.mf.8.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.9.title')}</strong> – {t('products.13.mf.9.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.10.title')}</strong> – {t('products.13.mf.10.p')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.13.mf.11.title')}</strong> – {t('products.13.mf.11.p')}
                                                        </li>

                                                    </ul>
                                                </>

                                            )}


                                            {product.id === 15 && (
                                                <>
                                                    <p>🪨 {t('products.14.subtitle.0')}</p>
                                                    <p>{t('products.14.subtitle.1')}</p>
                                                    <h4>{t('products.14.mf.0.title')}</h4>
                                                    <ul>
                                                        <li>
                                                            {t('products.14.mf.0.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.0.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.0.lt.2')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.0.lt.3')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.0.lt.4')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.0.lt.5')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.0.lt.6')}
                                                        </li>
                                                    </ul>

                                                    <h4>{t('products.14.mf.1.title')}</h4>

                                                    <ul>
                                                        <li>
                                                            {t('products.14.mf.1.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.1.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.1.lt.2')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.1.lt.3')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.1.lt.4')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.1.lt.5')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.1.lt.6')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.1.lt.7')}
                                                        </li>
                                                    </ul>

                                                    <h4>⚙️ {t('products.14.mf.2.title')}</h4>

                                                    <ul>
                                                        <li>
                                                            {t('products.14.mf.2.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.2.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.2.lt.2')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.2.lt.3')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.2.lt.4')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.2.lt.5')}
                                                        </li>
                                                    </ul>

                                                    <h4>💊 {t('products.14.mf.3.title')}</h4>

                                                    <ul>
                                                        <li>
                                                            {t('products.14.mf.3.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.3.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.3.lt.2')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.3.lt.3')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.3.lt.4')}
                                                        </li>
                                                        <li>
                                                            {t('products.14.mf.3.lt.5')}
                                                        </li>
                                                    </ul>
                                                </>

                                            )}

                                            {product.id === 16 && (
                                                <>
                                                    <h3>
                                                        <strong>{t('products.15.subtitle.0')}</strong> {t('products.15.subtitle.1')}
                                                    </h3>

                                                    <ol>
                                                        <li>
                                                            {t('products.15.lt.0.title')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.1.title')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.2.title')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.3.title')}
                                                        </li>
                                                    </ol>

                                                    <h3>🔬 1. {t('products.15.lt.0.title')}:</h3>
                                                    <p>{t('products.15.lt.0.p')}</p>

                                                    <h4>{t('products.15.lt.0.lt.0.title')}:</h4>
                                                    <ul>
                                                        <li>
                                                            {t('products.15.lt.0.lt.0.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.0.lt.0.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.0.lt.0.lt.2')}
                                                        </li>
                                                    </ul>

                                                    <h4>{t('products.15.lt.0.lt.1.title')}:</h4>

                                                    <ul>
                                                        <li>
                                                            {t('products.15.lt.0.lt.1.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.0.lt.1.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.0.lt.1.lt.2')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.0.lt.1.lt.3')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.0.lt.1.lt.4')}
                                                        </li>
                                                    </ul>


                                                    <h3>🌱 2. {t('products.15.lt.1.title')}:</h3>
                                                    <p>{t('products.15.lt.1.p')}</p>

                                                    <h4>{t('products.15.lt.1.lt.0.title')}:</h4>
                                                    <ul>
                                                        <li>
                                                            {t('products.15.lt.1.lt.0.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.1.lt.0.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.1.lt.0.lt.2')}
                                                        </li>
                                                    </ul>

                                                    <h4>{t('products.15.lt.1.lt.1.title')}:</h4>

                                                    <ul>
                                                        <li>
                                                            {t('products.15.lt.1.lt.1.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.1.lt.1.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.1.lt.1.lt.2')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.1.lt.1.lt.3')}
                                                        </li>
                                                    </ul>

                                                    <h3>🧬 3. {t('products.15.lt.2.title')}:</h3>
                                                    <p>{t('products.15.lt.2.p')}</p>

                                                    <h4>{t('products.15.lt.2.lt.0.title')}:</h4>

                                                    <ul>
                                                        <li>
                                                            {t('products.15.lt.2.lt.0.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.2.lt.0.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.2.lt.0.lt.2')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.2.lt.0.lt.3')}
                                                        </li>
                                                    </ul>

                                                    <h4>🔗 4. {t('products.15.lt.3.title')}:</h4>
                                                    <p>{t('products.15.lt.3.p')}</p>

                                                    <h4>{t('products.15.lt.3.lt.0.title')}:</h4>

                                                    <ul>
                                                        <li>
                                                            {t('products.15.lt.3.lt.0.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.3.lt.0.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.3.lt.0.lt.2')}
                                                        </li>
                                                    </ul>

                                                    <h4>🧠 {t('products.15.lt.3.lt.1.title')}:</h4>

                                                    <ul>
                                                        <li>
                                                            <strong>{t('products.15.lt.3.lt.1.lt.0.0')}:</strong> {t('products.15.lt.3.lt.1.lt.0.1')},
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.15.lt.3.lt.1.lt.1.0')}:</strong> {t('products.15.lt.3.lt.1.lt.1.1')}
                                                        </li>
                                                        <li>
                                                            <strong>{t('products.15.lt.3.lt.1.lt.2.0')}:</strong> s{t('products.15.lt.3.lt.1.lt.2.1')}
                                                        </li>
                                                    </ul>

                                                    <h3>🕒 {t('products.15.lt.3.lt.2.title')}:</h3>

                                                    <ul>
                                                        <li>
                                                            {t('products.15.lt.3.lt.2.lt.0')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.3.lt.2.lt.1')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.3.lt.2.lt.2')}
                                                        </li>
                                                        <li>
                                                            {t('products.15.lt.3.lt.2.lt.3')}
                                                        </li>
                                                    </ul>
                                                </>

                                            )}


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
                                            {product.vit_func && (
                                                <>
                                                    <VitaminsTable vit_func={product.vit_func}/>
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
    }
;

export default Product;
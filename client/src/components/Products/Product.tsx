import './Product.css'
import opt1 from './../../assets/img/BodyCare.jpg'
import opt2 from './../../assets/img/prodHair.jpg'
import opt3 from './../../assets/img/prodSupliment.jpg'
import { Link } from 'react-router-dom';


import {useTranslation} from "react-i18next";

const Product = () => {

    const {t} = useTranslation();

    return (
        <>
            <h1 style={{marginTop: '175px', fontFamily: '"EB Garamond", serif'}}>
                {t("prod_title")}
            </h1>
            <div className="products-image-container">
                <div className="opt">
                    <Link to="/products/face-body-care">
                        <img src={opt1} alt="BodyCare"/>
                        <h3>{t("navbar.links.3.subtitle.1")}</h3>
                    </Link>
                </div>
                <div className="opt">
                    <Link to="/products/hair-care">
                        <img src={opt2} alt="prodHair"/>
                        <h3>{t("navbar.links.3.subtitle.0")}</h3>
                    </Link>
                </div>
                <div className="opt">
                    <Link to="/products/health-balance">
                        <img src={opt3} alt="/health-balance"/>
                        <h3>{t("navbar.links.3.subtitle.2")}</h3>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Product;
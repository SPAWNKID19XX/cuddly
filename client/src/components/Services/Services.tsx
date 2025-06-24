import './Services.css'
import {useTranslation} from "react-i18next";
import products from "../../assets/img/products.jpg";
import lab from "../../assets/img/lab.jpg";
import {Link} from "react-router-dom";

const Services = () => {
    const {t} = useTranslation();
    return (
        <div className="servoces-area">
            <div className="container">
                <h1 style={{marginTop: '150px', fontFamily: '"EB Garamond", serif'}}>
                    {t("serv_title")}
                </h1>
                <div className="products-image-container">
                    <div className="opt">
                        <Link to="/services/products">
                            <img src={products} alt="Products"/>
                            <h3>{t("about_us.links.1")}</h3>
                        </Link>
                    </div>
                    <div className="opt">
                        <Link to="/services/lab">
                            <img src={lab} alt="Labaratory"/>
                            <h3>{t("about_us.links.0")}</h3>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
};

export default Services;
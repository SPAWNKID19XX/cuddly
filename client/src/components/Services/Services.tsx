import './Services.css'
import {useTranslation} from "react-i18next";
import products from "../../assets/img/products.jpg";
import lab from "../../assets/img/lab.jpg";
import {Link} from "react-router-dom";

const Services = () => {
    const {t} = useTranslation();
    return (
        <div className='servoces-area'>
            <div className="container">
                <div className='title-area'>
                    <h1>{t('services.title')}</h1>
                </div>
                <div className='services-container'>
                    <div className='service-image-area'>\
                        <Link to="/products"><img src={products} alt="Products"/></Link>
                    </div>

                    <div className='service-text-area'>
                        <div className='service-text-title-area'>
                            <h2>🌿 {t('services.lt.0.title')}</h2>
                        </div>
                        <div className="main-text-area">
                            <h3>🧴 {t('services.lt.0.subtitle')}:</h3>
                            <p>{t('services.lt.0.p.0')}
                                <strong>{t('services.lt.0.p.1')}</strong>, {t('services.lt.0.p.2')}
                                <strong> {t('services.lt.0.p.3')}</strong>
                                {t('services.lt.0.p.4')}
                                <strong>{t('services.lt.0.p.5')}</strong> {t('services.lt.0.p.6')}.
                            </p>
                            <h3>{t('services.lt.0.pc.title')}</h3>
                            <ul>
                                <li><strong>{t('services.lt.0.pc.lt.0.0')}</strong> {t('services.lt.0.pc.lt.0.1')}</li>
                                <li><strong>{t('services.lt.0.pc.lt.1.0')}</strong> {t('services.lt.0.pc.lt.1.1')}</li>
                                <li><strong>{t('services.lt.0.pc.lt.2.0')}</strong> {t('services.lt.0.pc.lt.2.1')}</li>
                                <li><strong>{t('services.lt.0.pc.lt.3.0')}</strong> {t('services.lt.0.pc.lt.3.1')}</li>
                                <li><strong>{t('services.lt.0.pc.lt.4.0')}</strong> {t('services.lt.0.pc.lt.4.1')}</li>
                            </ul>
                            <h3>🚚 {t('services.lt.0.logist.title')}</h3>
                            <p>{t('services.lt.0.logist.p.0')}
                                <strong>{t('services.lt.0.logist.p.1')}</strong> {t('services.lt.0.logist.p.2')}
                            </p>
                            <h3>{t('services.lt.0.logist.subtitle')}</h3>
                            <ul>
                                <li>{t('services.lt.0.logist.lt.0')}</li>
                                <li>{t('services.lt.0.logist.lt.1')}</li>
                                <li>{t('services.lt.0.logist.lt.2')}</li>
                                <li>{t('services.lt.0.logist.lt.3')}</li>
                                <li>{t('services.lt.0.logist.lt.4')}</li>
                                <li>{t('services.lt.0.logist.lt.5')}</li>
                            </ul>

                            <h3>💡 {t('services.lt.0.wwe.title')}</h3>
                            <ul>
                                <li>{t('services.lt.0.wwe.lt.0')}</li>
                                <li>{t('services.lt.0.wwe.lt.1')}</li>
                                <li>{t('services.lt.0.wwe.lt.2')}</li>
                                <li>{t('services.lt.0.wwe.lt.3')}</li>
                                <li>{t('services.lt.0.wwe.lt.4')}</li>
                            </ul>
                            <h3>📦 {t('services.lt.0.ls.title')}</h3>
                            <p>{t('services.lt.0.ls.p.0')}
                                <strong>{t('services.lt.0.ls.p.0')}</strong>, {t('services.lt.0.ls.p.2')}</p>

                        </div>
                    </div>

                </div>
                <div className='services-container'>
                    <div className='service-image-area'>\
                        <Link to="/products"><img src={lab} alt="Labaratory"/></Link>
                    </div>

                    <div className='service-text-area'>
                        <div className='service-text-title-area'>
                            <h2>🌟 {t('services.lt.1.title')}</h2>
                            <h3>🧪 {t('services.lt.1.subtitle')}</h3>
                        </div>
                        <p>
                            {t('services.lt.1.p.0')} <strong>{t('services.lt.1.p.1')}</strong>— {t('services.lt.1.p.2')}
                            <strong>{t('services.lt.1.p.3')}</strong>{t('services.lt.1.p.4')}<strong>{t('services.lt.1.p.5')}</strong> {t('services.lt.1.p.6')}
                        </p>

                        <p>{t('services.lt.1.p.7')}</p>

                        <h3>🔖 {t('services.lt.1.lable.title')}</h3>
                        <p>
                            {t('services.lt.1.lable.p.0')}<strong>{t('services.lt.1.lable.p.1')}:</strong>
                        </p>
                        <ul>
                            <li>{t('services.lt.1.lable.lt.0.0')} <strong>{t('services.lt.1.lable.lt.0.1')}</strong> {t('services.lt.1.lable.lt.0.2')}</li>
                            <li>{t('services.lt.1.lable.lt.1.0')} <strong>{t('services.lt.1.lable.lt.1.1')}</strong></li>
                            <li>{t('services.lt.1.lable.lt.2.0')} <strong>{t('services.lt.1.lable.lt.2.1')}</strong></li>
                            <li>{t('services.lt.1.lable.lt.3.0')} <strong> {t('services.lt.1.lable.lt.3.1')}</strong></li>
                            <li>{t('services.lt.1.lable.lt.4')}</li>
                        </ul>
                        <h3>🔄 {t('services.lt.1.collaboration.title')}</h3>
                        <p>{t('services.lt.1.collaboration.p')}:</p>
                        <ul>
                            <li>{t('services.lt.1.collaboration.lt.0')}</li>
                            <li>{t('services.lt.1.collaboration.lt.1')}</li>
                            <li>{t('services.lt.1.collaboration.lt.2')}</li>
                            <li>{t('services.lt.1.collaboration.lt.3')}</li>
                        </ul>
                        <h3>📦 {t('services.lt.1.manufact.title')}</h3>
                        <p>{t('services.lt.1.manufact.p.0')} <strong>{t('services.lt.1.manufact.p.1')}</strong></p>
                        <ol>
                            <li>{t('services.lt.1.manufact.lt.0')}</li>
                            <li>{t('services.lt.1.manufact.lt.1')}</li>
                            <li>{t('services.lt.1.manufact.lt.2')}</li>
                            <li>{t('services.lt.1.manufact.lt.3')}</li>
                            <li>{t('services.lt.1.manufact.lt.4')}</li>
                        </ol>

                        <h3>✅ {t('services.lt.1.guarantees.title')}:</h3>
                        <ul>
                            <li>{t('services.lt.1.guarantees.lt.0')}</li>
                            <li>{t('services.lt.1.guarantees.lt.1')}</li>
                            <li>{t('services.lt.1.guarantees.lt.2')}</li>
                            <li>{t('services.lt.1.guarantees.lt.3')}</li>
                            <li>{t('services.lt.1.guarantees.lt.4')}</li>
                        </ul>
                        <h3>🎯 {t('services.lt.1.guarantees.subtitle')}</h3>
                    </div>

                </div>
            </div>
        </div>
    )
};

export default Services;
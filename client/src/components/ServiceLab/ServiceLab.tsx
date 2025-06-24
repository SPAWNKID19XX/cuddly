import './ServiceLab.css';
import {useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import lab from "../../assets/img/lab.jpg";

const ServiceLab = () => {

    const {t} = useTranslation();

    return (

        <div className="servoces-area">
            <div className="container">
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
                            <li>{t('services.lt.1.lable.lt.0.0')}
                                <strong>{t('services.lt.1.lable.lt.0.1')}</strong> {t('services.lt.1.lable.lt.0.2')}
                            </li>
                            <li>{t('services.lt.1.lable.lt.1.0')} <strong>{t('services.lt.1.lable.lt.1.1')}</strong>
                            </li>
                            <li>{t('services.lt.1.lable.lt.2.0')} <strong>{t('services.lt.1.lable.lt.2.1')}</strong>
                            </li>
                            <li>{t('services.lt.1.lable.lt.3.0')} <strong> {t('services.lt.1.lable.lt.3.1')}</strong>
                            </li>
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
    );
};

export default ServiceLab;
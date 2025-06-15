import './Footer.css'
import fb from '../../assets/img/icons/facebook.png'
import tt from '../../assets/img/icons/tiktok.png'
import insta from '../../assets/img/icons/instagram.png'
import {useState} from "react";
import logo from '../../assets/img/logo.jpg';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const {t} = useTranslation();
    interface SubjectOption {
        value: string;
        label: string;
    }

    const subjectOptions: SubjectOption[] = [
        {value: '', label: t("ftr.frm.fields.subject.lt.0")},
        {value: 'general', label: t("ftr.frm.fields.subject.lt.1")},
        {value: 'support', label: t("ftr.frm.fields.subject.lt.2")},
        {value: 'feedback', label: t("ftr.frm.fields.subject.lt.3")}
    ];

    const [selectedSubject, setSelectedSubject] = useState<string>('');

    const handleSubjectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedSubject(event.target.value);
    };


    return (
        <div className='page-container'>
            <div className='footer-container'>
                <section className='footer'>
                    <div className='footer-info'>
                        <img className="logo" src={logo} alt="Cuddly Logo"/>
                        <span>{t("ftr.slogan")}</span>
                        <div className='social-media'>
                            <a href=""><img src={fb} alt=""/></a>
                            <a href=""><img src={insta} alt=""/></a>
                            <a href=""><img src={tt} alt=""/></a>
                        </div>
                        <div className='contact-politics'>
                            <div className='contacts'>
                                <h3>{t("ftr.contact.title")}</h3>
                                <span>📞 (+351) 964696149</span>
                                <span>📍 My Adress<br/> 8700-497, Faro</span>
                                {/*<button><img src={whatsapp} alt="" />{t("ftr.contact.btn")}</button>*/}
                            </div>
                            <div className='politics'>
                                <h3>{t("ftr.docs.title")}</h3>
                                <a href="/privacy-policy">{t("ftr.docs.lt.0")}</a>
                                <a href="/cookie-policy">{t("ftr.docs.lt.1")}</a>
                                <a href="/terms-conditions">{t("ftr.docs.lt.2")}</a>
                            </div>
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className='form'>
                            <h2>{t("ftr.frm.title")}</h2>
                            <span>{t("ftr.frm.p")}</span>
                            <form action="">
                                <label htmlFor="">{t("ftr.frm.fields.name")}*</label>
                                <input type="text"/>
                                <div className='email-phone'>
                                    <div className="field">
                                        <label>Email*</label>
                                        <input type="email"/>
                                    </div>
                                    <div className="field">
                                        <label>{t("ftr.frm.fields.phone")}*</label>
                                        <input type="tel"/>
                                    </div>
                                </div>
                                <label htmlFor="subject">{t("ftr.frm.fields.subject.title")}*</label>
                                <select
                                    name="subject"
                                    id="subject"
                                    value={selectedSubject}
                                    onChange={handleSubjectChange}
                                    required
                                >
                                    {subjectOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                                <label htmlFor="">{t("ftr.frm.fields.msg")}*</label>
                                <textarea name="" id=""></textarea>
                                <div className='checkbox'>
                                    <input type="checkbox"/>
                                    <span>{t("ftr.frm.fields.axcept.0")}<a href="/politica-privacidade" target="_blank"
                                                                        rel="noopener noreferrer">{t("ftr.frm.fields.axcept.1")}</a></span>
                                </div>
                                <button>{t("ftr.frm.btn")}</button>
                            </form>
                        </div>
                    </div>

                </section>
                <div className='copyright'>
                    <span>© {currentYear} Cuddly. {t("ftr.bf")}.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer

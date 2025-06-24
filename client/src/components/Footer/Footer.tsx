import axios from 'axios';
import './Footer.css'
// import fb from '../../assets/img/icons/facebook.png'
// import tt from '../../assets/img/icons/tiktok.png'
// import insta from '../../assets/img/icons/instagram.png'
import {useState} from "react";
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        accepted: false,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const target = e.target;
        const value = target instanceof HTMLInputElement && target.type === 'checkbox'
            ? target.checked
            : target.value;
        const name = target.name;

        setFormData(prev => ({
            ...prev,
            [name]: value,
        }));
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!formData.accepted) {
            alert(t("ftr.frm.errors.privacy"));
            return;
        }
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/v1/main/', formData);
            console.log('Success:', response.data);
            alert(t("ftr.frm.success_msg"));
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
                accepted: false,
            });
            setSelectedSubject('');
        } catch (error: Error | unknown) {
            console.error('Error:', error);
            alert(t("ftr.frm.error_msg"));
        }
    };


    return (
        <div className='page-container'>
            <div className='footer-container'>
                <section className='footer'>
                    <div className='footer-info'>
                        <span>{t("ftr.slogan")}</span>
                        <div className='social-media'>
                            {/*<a href=""><img src={fb} alt=""/></a>*/}
                            {/*<a href=""><img src={insta} alt=""/></a>*/}
                            {/*<a href=""><img src={tt} alt=""/></a>*/}
                        </div>
                        <div className='contact-politics'>
                            <div className='contacts'>
                                <h3>{t("ftr.contact.title")}</h3>
                                <span>📞 (+351) 920 811 661</span>
                                <span>📧 cuddlybreeze@gmail.com</span>
                                <span>📍 Rua das Hortênsias, Lote F, Loja D, R/C <br/> Faro 8005-196, Gambelas</span>
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
                            <span className="fuel_form">{t("ftr.frm.p")}</span>
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="name">{t("ftr.frm.fields.name")}*</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='email-phone'>
                                    <div className="field">
                                        <label htmlFor="email">Email*</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="phone">{t("ftr.frm.fields.phone")}*</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <label htmlFor="subject">{t("ftr.frm.fields.subject.title")}*</label>
                                <select
                                    name="subject"
                                    id="subject"
                                    value={selectedSubject}
                                    onChange={(e) => {
                                        handleSubjectChange(e);
                                        handleChange(e);
                                    }}
                                    required
                                >
                                    {subjectOptions.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>

                                <label htmlFor="message">{t("ftr.frm.fields.msg")}*</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <div className='checkbox'>
                                    <input
                                        type="checkbox"
                                        id="accepted"
                                        name="accepted"
                                        checked={formData.accepted}
                                        onChange={handleChange}
                                    />
                                     <span> {t("ftr.frm.fields.axcept.0")} <a
                                            href="/politica-privacidade"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                    {t("ftr.frm.fields.axcept.1")}
                </a>
            </span>
                                </div>
                                <button type="submit">{t("ftr.frm.btn")}</button>
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

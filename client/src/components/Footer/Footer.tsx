import './Footer.css'
import fb from '../../assets/img/icons/facebook.png'
import tt from '../../assets/img/icons/tiktok.png'
import insta from '../../assets/img/icons/instagram.png'
import {useState} from "react";
import logo from '../../assets/img/logo.jpg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    interface SubjectOption {
        value: string;
        label: string;
    }

    const subjectOptions: SubjectOption[] = [
        {value: '', label: 'Select a subject'},
        {value: 'general', label: 'General Inquiry'},
        {value: 'support', label: 'Technical Support'},
        {value: 'feedback', label: 'Feedback'}
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
                        <span>Cuddly – Beauty and Wellness in Harmony.</span>
                        <div className='social-media'>
                            <a href=""><img src={fb} alt=""/></a>
                            <a href=""><img src={insta} alt=""/></a>
                            <a href=""><img src={tt} alt=""/></a>
                        </div>
                        <div className='contact-politics'>
                            <div className='contacts'>
                                <h3>Contacts</h3>
                                <span>📞 (+351) 964696149</span>
                                <span>📍 My Adress<br/> 8700-497, Faro</span>
                                {/*<button><img src={whatsapp} alt="" />{t("ftr.contact.btn")}</button>*/}
                            </div>
                            <div className='politics'>
                                <h3>Documents</h3>
                                <a href="/privacy-policy">Privacy Policy</a>
                                <a href="/cookie-policy">Cookie Policy</a>
                                <a href="/terms-conditions">Terms Conditions</a>
                            </div>
                        </div>
                    </div>
                    <div className='form-container'>
                        <div className='form'>
                            <h2>Contact form</h2>
                            <span>Please fill out the form below to get in touch with our team.</span>
                            <form action="">
                                <label htmlFor="">Name*</label>
                                <input type="text"/>
                                <div className='email-phone'>
                                    <div className="field">
                                        <label>Email*</label>
                                        <input type="email"/>
                                    </div>
                                    <div className="field">
                                        <label>Phone*</label>
                                        <input type="tel"/>
                                    </div>
                                </div>
                                <label htmlFor="subject">Subject*</label>
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

                                <label htmlFor="">Message*</label>
                                <textarea name="" id=""></textarea>
                                <div className='checkbox'>
                                    <input type="checkbox"/>
                                    <span>I have read and accept the <a href="/politica-privacidade" target="_blank"
                                                                        rel="noopener noreferrer">Terms Conditions</a></span>
                                </div>
                                <button>Submit</button>
                            </form>
                        </div>
                    </div>

                </section>
                <div className='copyright'>
                    <span>© {currentYear} Cuddly. All rights reserved.</span>
                </div>
            </div>
        </div>
    )
}

export default Footer

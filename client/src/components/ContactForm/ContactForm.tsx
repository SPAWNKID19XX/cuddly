import './ContactForm.css'
import {useState} from "react";
import axios from "axios";
import {useTranslation} from "react-i18next";

const ContactForm = () => {
    const {t} = useTranslation();

    interface SubjectOption {
        value: string;
        label: string;
    }

    const subjectOptions: SubjectOption[] = [
        {value: '', label: t("ftr.frm.fields.subject.lt.0")},
        {value: 'general', label: t("ftr.frm.fields.subject.lt.1")},
        {value: 'support', label: t("ftr.frm.fields.subject.lt.2")},
        {value: 'feedback', label: t("ftr.frm.fields.subject.lt.3")},
        {value: 'Information', label: t("ftr.frm.fields.subject.lt.4")}
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
            const apiUrl = import.meta.env.VITE_API_URL;
            const response = await axios.post(`${apiUrl}/api/v1/main/`, formData);
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
        <div className='contact-form-section'>
            <div className="container">
                <h1>Contact Form</h1>
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

                    <label htmlFor="email">Email*</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <label htmlFor="phone">{t("ftr.frm.fields.phone")}*</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                    />
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
                        <span>
                {t("ftr.frm.fields.axcept.0")}
                            <a
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
    );
};

export default ContactForm;
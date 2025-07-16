import React, {useEffect} from 'react';
import './PP.css';
// import {useTranslation} from "react-i18next";

const PrivacyPolicy: React.FC = () => {
    useEffect(() => {
        // Scroll to top when component mounts
        window.scrollTo(0, 0);
    }, []);
    // const {t} = useTranslation();

    return (
        <div className="privacy-policy">
            <h1>Boris isac</h1>
        </div>
    );
};

export default PrivacyPolicy;
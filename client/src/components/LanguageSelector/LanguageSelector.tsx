import React, { useState } from 'react';
import './LanguageSelector.css';

interface Language {
    code: string;
    label: string;
    flag: string;
}

const languages: Language[] = [
    {
        code: 'pt',
        label: 'PT',
        flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/PT.svg'
    },
    {
        code: 'en',
        label: 'EN',
        flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/GB.svg'
    },
    {
        code: 'es',
        label: 'ES',
        flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/ES.svg'
    },
    {
        code: 'it',
        label: 'IT',
        flag: 'http://purecatamphetamine.github.io/country-flag-icons/3x2/IT.svg'
    }
];

const LanguageSwitcher: React.FC = () => {
    const [selectedLang, setSelectedLang] = useState('en');

    const handleLanguageChange = (langCode: string) => {
        setSelectedLang(langCode);
        // Здесь можно добавить дополнительную логику при смене языка
    };

    return (
        <div className="language-switcher">
            {languages.map((lang, index) => (
                <React.Fragment key={lang.code}>
                    <button
                        className={`lang-button ${selectedLang === lang.code ? 'active' : ''}`}
                        onClick={() => handleLanguageChange(lang.code)}
                        aria-label={`Switch to ${lang.label}`}
                    >
                        <span className="lang-label">{lang.label}</span>
                        <img
                            src={lang.flag}
                            alt={`${lang.label} flag`}
                            className="lang-flag"
                        />
                    </button>
                    {index < languages.length - 1 && (
                        <span className="lang-divider">|</span>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};

export default LanguageSwitcher;
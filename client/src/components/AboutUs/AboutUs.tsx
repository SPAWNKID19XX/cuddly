import './AboutUs.css'
import {useTranslation} from "react-i18next";

const AboutUs = () => {
    const {t} = useTranslation();
    return (
        <div className="about-us">
            <div className="about-us__container">
                <h1>{t("about_us.title")}</h1>
                <p>{t("about_us.p.0")}
                </p>
                <p>
                    {t("about_us.p.1")}
                </p>
                <p>
                    {t("about_us.p.2")}
                </p>

                <h2>{t("about_us.subtitle.0.title")}:</h2>
                <div className="about-us__list">
                    <ul>
                        <li>
                            {t("about_us.subtitle.0.lt.1.0")} <strong>{t("about_us.subtitle.0.lt.1.1")}</strong> {t("about_us.subtitle.0.lt.1.2")}
                        </li>
                        <li>
                            <strong>{t("about_us.subtitle.0.lt.2.0")}</strong> {t("about_us.subtitle.0.lt.2.1")}
                        </li>
                        <li>
                            {t("about_us.subtitle.0.lt.3.0")}<strong>{t("about_us.subtitle.0.lt.3.1")}</strong>
                        </li>
                        <li>
                            {t("about_us.subtitle.0.lt.4.0")}
                        </li>
                        <li>
                            {t("about_us.subtitle.0.lt.5.0")}
                        </li>
                    </ul>
                </div>

                <h2>{t("about_us.subtitle.1.title")}:</h2>
                <div className="about-us__list">
                    <ul>
                        <li>
                           {t("about_us.subtitle.1.lt.0")}
                        </li>
                        <li>
                           {t("about_us.subtitle.1.lt.1")}
                        </li>
                        <li>
                            {t("about_us.subtitle.1.lt.2")}
                        </li>
                        <li>
                            {t("about_us.subtitle.1.lt.3")}
                        </li>
                    </ul>
                </div>
                <p>{t("about_us.p.3")}</p>

            </div>

        </div>
    );
};

export default AboutUs;
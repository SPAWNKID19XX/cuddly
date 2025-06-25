import './HealthBalance.css'
import {useTranslation} from "react-i18next";
import vit from "../../assets/img/vitamins.png";
import supl from './../../assets/img/supl.png'
import minerals from "../../assets/img/minerals.png";
import biotics from "../../assets/img/biotics.png";


const HealthBalance = () => {


        const {t} = useTranslation();

        return (
            <div className="product-main-container">
                <div className="container">
                    <div className="title-container">
                        <h1>Health & Balance</h1>
                    </div>
                    <div className="item_product_container">
                        <div className="products-img-container">
                            <img src={vit} alt="Vitamins"/>
                        </div>
                        <div className="products-description-container">
                            <h2>🌞 {t('products.12.description.fat_soluble_vitamins.title')} </h2>
                            <p>{t('products.12.description.fat_soluble_vitamins.description')}</p>
                            <h3>Vitamins:</h3>
                            <ul>
                                <li><strong>A</strong> – {t('products.12.description.fat_soluble_vitamins.vitamins.A')}</li>
                                <li><strong>D</strong> – {t('products.12.description.fat_soluble_vitamins.vitamins.D')}</li>
                                <li><strong>E</strong> – {t('products.12.description.fat_soluble_vitamins.vitamins.E')}</li>
                                <li><strong>K</strong> – {t('products.12.description.fat_soluble_vitamins.vitamins.K')}</li>
                            </ul>
                            <h3>{t('products.12.description.fat_soluble_vitamins.sources.title')}</h3>
                            <ul>
                                <li>{t('products.12.description.fat_soluble_vitamins.sources.A')}</li>
                                <li>{t('products.12.description.fat_soluble_vitamins.sources.D')}</li>
                                <li>{t('products.12.description.fat_soluble_vitamins.sources.E')}</li>
                                <li>{t('products.12.description.fat_soluble_vitamins.sources.K')}</li>
                            </ul>
                            <h3>{t('products.12.description.fat_soluble_vitamins.deficiency_effects.title')}</h3>
                            <ul>
                                <li>{t('products.12.description.fat_soluble_vitamins.deficiency_effects.A')}</li>
                                <li>{t('products.12.description.fat_soluble_vitamins.deficiency_effects.D')}</li>
                                <li>{t('products.12.description.fat_soluble_vitamins.deficiency_effects.E')}</li>
                                <li>{t('products.12.description.fat_soluble_vitamins.deficiency_effects.K')}</li>
                            </ul>

                            <h2>{t('products.12.description.water_soluble_vitamins_b_complex.title')}</h2>
                            <p>{t('products.12.description.water_soluble_vitamins_b_complex.description')}</p>
                            <h3>{t('products.12.description.water_soluble_vitamins_b_complex.vitamins_functions.title')}:</h3>
                            <ul>
                                <li><strong>B1
                                    (Thiamine)</strong> – {t('products.12.description.water_soluble_vitamins_b_complex.vitamins_functions.B1')}
                                </li>
                                <li><strong>B2
                                    (Riboflavin)</strong> – {t('products.12.description.water_soluble_vitamins_b_complex.vitamins_functions.B2')}
                                </li>
                                <li><strong>B3
                                    (Niacin)</strong> – {t('products.12.description.water_soluble_vitamins_b_complex.vitamins_functions.B3')}
                                </li>
                                <li>
                                    <strong>B5</strong> – {t('products.12.description.water_soluble_vitamins_b_complex.vitamins_functions.B5')}
                                </li>
                                <li>
                                    <strong>B6</strong> – {t('products.12.description.water_soluble_vitamins_b_complex.vitamins_functions.B6')}
                                </li>
                                <li><strong>B7
                                    (Biotin)</strong> – {t('products.12.description.water_soluble_vitamins_b_complex.vitamins_functions.B7')}
                                </li>
                                <li><strong>B9 (Folic
                                    Acid)</strong> – {t('products.12.description.water_soluble_vitamins_b_complex.vitamins_functions.B9')}
                                </li>
                                <li>
                                    <strong>B12</strong> – {t('products.12.description.water_soluble_vitamins_b_complex.vitamins_functions.B12')}
                                </li>
                            </ul>
                            <h3>{t('products.12.description.water_soluble_vitamins_b_complex.sources_title')}</h3>
                            <ul>
                                <li>{t('products.12.description.water_soluble_vitamins_b_complex.sources')}</li>
                            </ul>
                            <h3>{t('products.12.description.water_soluble_vitamins_b_complex.deficiency_symptoms_title')}</h3>
                            <ul>
                                <li>{t('products.12.description.water_soluble_vitamins_b_complex.deficiency_symptoms.0')}</li>
                                <li>{t('products.12.description.water_soluble_vitamins_b_complex.deficiency_symptoms.1')}</li>
                                <li>{t('products.12.description.water_soluble_vitamins_b_complex.deficiency_symptoms.2')}</li>
                            </ul>

                            <h2>🍊 {t('products.12.description.water_soluble_vitamin_c.title')}</h2>
                            <p>{t('products.12.description.water_soluble_vitamin_c.description')}</p>
                            <h3>Function:</h3>
                            <ul>
                                <li>{t('products.12.description.water_soluble_vitamin_c.function.0')}</li>
                                <li>{t('products.12.description.water_soluble_vitamin_c.function.1')}</li>
                                <li>{t('products.12.description.water_soluble_vitamin_c.function.2')}</li>
                                <li>{t('products.12.description.water_soluble_vitamin_c.function.3')}</li>
                            </ul>
                            <h3>{t('products.12.description.water_soluble_vitamins_b_complex.sources_title')}</h3>
                            <ul>
                                <li>{t('products.12.description.water_soluble_vitamin_c.sources')}</li>
                            </ul>
                            <h3>{t('products.12.description.water_soluble_vitamin_c.deficiency_title')}</h3>
                            <ul>
                                <li>{t('products.12.description.water_soluble_vitamin_c.deficiency')}</li>
                            </ul>

                            <h2>🧠 {t('products.12.description.why_vitamins_matter.title')}</h2>
                            <ul>
                                <li>{t('products.12.description.why_vitamins_matter.points.0')}</li>
                                <li>{t('products.12.description.why_vitamins_matter.points.1')}</li>
                                <li>{t('products.12.description.why_vitamins_matter.points.2')}</li>
                                <li>{t('products.12.description.why_vitamins_matter.points.3')}</li>
                            </ul>

                            <h2>🕒 {t('products.12.description.when_to_watch_vitamin_levels.title')}</h2>
                            <ul>
                                <li>{t('products.12.description.when_to_watch_vitamin_levels.points.0')}</li>
                                <li>{t('products.12.description.when_to_watch_vitamin_levels.points.1')}</li>
                                <li>{t('products.12.description.when_to_watch_vitamin_levels.points.2')}</li>
                                <li>{t('products.12.description.when_to_watch_vitamin_levels.points.3')}</li>
                            </ul>
                        </div>
                    </div>

                    <div className="item_product_container">
                        <div className="products-img-container">
                            <img src={supl} alt="Vitamins"/>
                        </div>
                        <div className="products-description-container">
                            <h2>{t('products.13.title')}</h2>
                            <p>{t('products.13.description')}</p>
                            <h3>{t('products.13.include_title')}</h3>
                            <ul>
                                <li>{t('products.13.include_list.0')}</li>
                                <li>{t('products.13.include_list.1')}</li>
                                <li>{t('products.13.include_list.2')}</li>
                                <li>{t('products.13.include_list.3')}</li>
                                <li>{t('products.13.include_list.4')}</li>
                            </ul>
                            <p>{t('products.13.warning')}</p>
                            <h2>{t('products.13.functions_title')}</h2>
                            <ol>
                                <li>
                                    <strong>{t('products.13.functions_list.0').split('–')[0].trim()}</strong> – {t('products.13.functions_list.0').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.1').split('–')[0].trim()}</strong> – {t('products.13.functions_list.1').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.2').split('–')[0].trim()}</strong> – {t('products.13.functions_list.2').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.3').split('–')[0].trim()}</strong> – {t('products.13.functions_list.3').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.4').split('–')[0].trim()}</strong> – {t('products.13.functions_list.4').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.5').split('–')[0].trim()}</strong> – {t('products.13.functions_list.5').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.6').split('–')[0].trim()}</strong> – {t('products.13.functions_list.6').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.7').split('–')[0].trim()}</strong> – {t('products.13.functions_list.7').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.8').split('–')[0].trim()}</strong> – {t('products.13.functions_list.8').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.9').split('–')[0].trim()}</strong> – {t('products.13.functions_list.9').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.10').split('–')[0].trim()}</strong> – {t('products.13.functions_list.10').split('–')[1].trim()}
                                </li>
                                <li>
                                    <strong>{t('products.13.functions_list.11').split('–')[0].trim()}</strong> – {t('products.13.functions_list.11').split('–')[1].trim()}
                                </li>
                            </ol>
                            <h3>{t('products.13.when_title')}</h3>
                            <ul>
                                <li>{t('products.13.when_list.0')}</li>
                                <li>{t('products.13.when_list.1')}</li>
                                <li>{t('products.13.when_list.2')}</li>
                                <li>{t('products.13.when_list.3')}</li>
                            </ul>
                            <h3>{t('products.13.reminder_title')}</h3>
                            <p>{t('products.13.reminder')}</p>
                        </div>

                    </div>


                    <div className="item_product_container">
                        <div className="products-img-container">
                            <img src={minerals} alt="Minerals"/>
                        </div>
                        <div className="products-description-container">
                            <h2>{t('products.14.title')}</h2>
                            <p>{t('products.14.description')}</p>

                            <h3>{t('products.14.functions_title')}</h3>
                            <ul>
                                <li>
                                    <strong>{t('products.14.functions_list.0').split('(')[0].trim()}</strong> ({t('products.14.functions_list.0').match(/\((.*?)\)/)?.[1]})
                                </li>
                                <li>
                                    <strong>{t('products.14.functions_list.1').split('(')[0].trim()}</strong> ({t('products.14.functions_list.1').match(/\((.*?)\)/)?.[1]})
                                </li>
                                <li>
                                    <strong>{t('products.14.functions_list.2').split('(')[0].trim()}</strong> ({t('products.14.functions_list.2').match(/\((.*?)\)/)?.[1]})
                                </li>
                                <li>
                                    <strong>{t('products.14.functions_list.3').split('(')[0].trim()}</strong> ({t('products.14.functions_list.3').match(/\((.*?)\)/)?.[1]})
                                </li>
                                <li>
                                    <strong>{t('products.14.functions_list.4').split('(')[0].trim()}</strong> ({t('products.14.functions_list.4').match(/\((.*?)\)/)?.[1]})
                                </li>
                                <li>
                                    <strong>{t('products.14.functions_list.5').split('(')[0].trim()}</strong> ({t('products.14.functions_list.5').match(/\((.*?)\)/)?.[1]})
                                </li>
                            </ul>

                            <h3>{t('products.14.why_title')}</h3>
                            <ul>
                                <li>{t('products.14.why_list.0')}</li>
                                <li>{t('products.14.why_list.1')}</li>
                                <li>{t('products.14.why_list.2')}</li>
                                <li>{t('products.14.why_list.3')}</li>
                                <li>{t('products.14.why_list.4')}</li>
                                <li>{t('products.14.why_list.5')}</li>
                            </ul>
                        </div>
                    </div>


                    <div className="item_product_container">
  <div className="products-img-container">
    <img src={biotics} alt={t('products.15.name')} />
  </div>
  <div className="products-description-container">
    <h2>{t('products.15.title')}</h2>
    <p dangerouslySetInnerHTML={{ __html: t('products.15.intro') }} />

    <ul>
      <li>{t('products.15.types_list.0')}</li>
      <li>{t('products.15.types_list.1')}</li>
      <li>{t('products.15.types_list.2')}</li>
      <li>{t('products.15.types_list.3')}</li>
    </ul>

    <h2>{t('products.15.sections.probiotics.title')}</h2>
    <p>{t('products.15.sections.probiotics.description')}</p>
    <h3>{t('products.15.sections.probiotics.common_strains_title')}</h3>
    <ul>
      <li>{t('products.15.sections.probiotics.common_strains.0')}</li>
      <li>{t('products.15.sections.probiotics.common_strains.1')}</li>
      <li>{t('products.15.sections.probiotics.common_strains.2')}</li>
    </ul>
    <h3>{t('products.15.sections.probiotics.benefits_title')}</h3>
    <ul>
      <li>{t('products.15.sections.probiotics.benefits.0')}</li>
      <li>{t('products.15.sections.probiotics.benefits.1')}</li>
      <li>{t('products.15.sections.probiotics.benefits.2')}</li>
      <li>{t('products.15.sections.probiotics.benefits.3')}</li>
      <li>{t('products.15.sections.probiotics.benefits.4')}</li>
    </ul>

    <h2>{t('products.15.sections.prebiotics.title')}</h2>
    <p>{t('products.15.sections.prebiotics.description')}</p>
    <h3>{t('products.15.sections.prebiotics.main_types_title')}</h3>
    <ul>
      <li>{t('products.15.sections.prebiotics.main_types.0')}</li>
      <li>{t('products.15.sections.prebiotics.main_types.1')}</li>
      <li>{t('products.15.sections.prebiotics.main_types.2')}</li>
    </ul>
    <h3>{t('products.15.sections.prebiotics.benefits_title')}</h3>
    <ul>
      <li>{t('products.15.sections.prebiotics.benefits.0')}</li>
      <li>{t('products.15.sections.prebiotics.benefits.1')}</li>
      <li>{t('products.15.sections.prebiotics.benefits.2')}</li>
      <li>{t('products.15.sections.prebiotics.benefits.3')}</li>
    </ul>

    <h2>{t('products.15.sections.postbiotics.title')}</h2>
    <p>{t('products.15.sections.postbiotics.description')}</p>
    <h3>{t('products.15.sections.postbiotics.benefits_title')}</h3>
    <ul>
      <li>{t('products.15.sections.postbiotics.benefits.0')}</li>
      <li>{t('products.15.sections.postbiotics.benefits.1')}</li>
      <li>{t('products.15.sections.postbiotics.benefits.2')}</li>
      <li>{t('products.15.sections.postbiotics.benefits.3')}</li>
    </ul>

    <h2>{t('products.15.sections.synbiotics.title')}</h2>
    <p>{t('products.15.sections.synbiotics.description')}</p>
    <h3>{t('products.15.sections.synbiotics.benefits_title')}</h3>
    <ul>
      <li>{t('products.15.sections.synbiotics.benefits.0')}</li>
      <li>{t('products.15.sections.synbiotics.benefits.1')}</li>
      <li>{t('products.15.sections.synbiotics.benefits.2')}</li>
    </ul>

    <h3>{t('products.15.other_benefits_title')}</h3>
    <ul>
      <li>{t('products.15.other_benefits.0')}</li>
      <li>{t('products.15.other_benefits.1')}</li>
      <li>{t('products.15.other_benefits.2')}</li>
    </ul>

    <h3>{t('products.15.when_to_use_title')}</h3>
    <ul>
      <li>{t('products.15.when_to_use.0')}</li>
      <li>{t('products.15.when_to_use.1')}</li>
      <li>{t('products.15.when_to_use.2')}</li>
      <li>{t('products.15.when_to_use.3')}</li>
    </ul>
  </div>
</div>


                </div>
            </div>

        )
    }
;

export default HealthBalance;
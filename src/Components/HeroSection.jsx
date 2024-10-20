import { IonIcon } from "@ionic/react";
import {
  shieldCheckmarkOutline,
  waterOutline,
  leafOutline,
  snowOutline,
  heartOutline,
} from "ionicons/icons";

import subtitle from "../assets/images/subtitle-img-white.png";
import { useTranslation } from "react-i18next"; // Import useTranslation

const HeroSection = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="container">
          <p className="section-subtitle">
            <img src={subtitle} width="32" height="7" alt="Wavy line" />
            <span>{t('welcome')}</span> {/* Translate welcome message */}
          </p>

          <h2 className="h1 hero-title">
            <strong>
              {t('missionName')} <br /> {t('organizationName')} {/* Translate mission and organization name */}
            </strong>
          </h2>

          <p className="hero-text">
            {t('missionDescription')} {/* Translate mission description */}
          </p>

          <button className="btn btn-primary">
            <span>{t('makeDonation')}</span> {/* Translate button text */}
            <IonIcon icon={heartOutline} aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="section features">
        <div className="container">
          <ul className="features-list">
            {/* Feature 1 */}
            <li className="features-item">
              <div className="item-icon">
                <IonIcon icon={shieldCheckmarkOutline} />
              </div>
              <div>
                <h3 className="h4 item-title">{t('safeShelter')}</h3> {/* Translate feature title */}
                <p className="item-text">{t('safeShelterDescription')}</p> {/* Translate feature description */}
              </div>
            </li>

            {/* Feature 2 */}
            <li className="features-item">
              <div className="item-icon">
                <IonIcon icon={waterOutline} />
              </div>
              <div>
                <h3 className="h4 item-title">{t('cleanWater')}</h3>
                <p className="item-text">{t('cleanWaterDescription')}</p>
              </div>
            </li>

            {/* Feature 3 */}
            <li className="features-item">
              <div className="item-icon">
                <IonIcon icon={leafOutline} />
              </div>
              <div>
                <h3 className="h4 item-title">{t('environmentalCare')}</h3>
                <p className="item-text">{t('environmentalCareDescription')}</p>
              </div>
            </li>

            {/* Feature 4 */}
            <li className="features-item">
              <div className="item-icon">
                <IonIcon icon={snowOutline} />
              </div>
              <div>
                <h3 className="h4 item-title">{t('disasterRelief')}</h3>
                <p className="item-text">{t('disasterReliefDescription')}</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default HeroSection;

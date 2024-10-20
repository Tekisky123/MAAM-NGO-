import { IonIcon } from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import { useTranslation } from 'react-i18next';
import IMG from "../assets/images/IMG-20241013-WA0043.jpg";

const CTASection = () => {
  const { t } = useTranslation(); // Hook to handle translations

  return (
    <section className="section cta">
      <div className="container">
        <div className="cta-content">
          <h2 className="h2 section-title">{t('cta_section.title')}</h2>

          <button className="btn btn-outline">
            <span>{t('cta_section.button_text')}</span>
            <IonIcon icon={heartOutline} aria-hidden="true" />
          </button>
        </div>

        <figure className="cta-banner">
          <img
            src={IMG}
            width="520"
            height="228"
            loading="lazy"
            alt={t('cta_section.image_alt')}
            className="img-cover"
          />
        </figure>
      </div>
    </section>
  );
};

export default CTASection;

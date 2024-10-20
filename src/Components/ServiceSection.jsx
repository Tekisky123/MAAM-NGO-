import { IonIcon } from "@ionic/react";
import {
  leafOutline,
  earthOutline,
  flowerOutline,
  boatOutline,
  arrowForward,
} from "ionicons/icons";
import { useTranslation } from "react-i18next";
import subtitle from "../assets/images/subtitle-img-green.png";

const ServiceSection = () => {
  const { t } = useTranslation(); // Hook to handle translations

  return (
    <section className="section service" id="service">
      <div className="container">
        <p className="section-subtitle">
          <img
            src={subtitle}
            width="32"
            height="7"
            alt={t('service_section.subtitle')}
          />
          <span>{t('service_section.subtitle')}</span>
        </p>

        <h2 className="h2 section-title">
          {t('service_section.title')}
        </h2>

        <ul className="service-list">
          {t('service_section.services', { returnObjects: true }).map((service, index) => (
            <li key={index}>
              <div className="service-card">
                <div className="card-icon">
                  <IonIcon icon={index === 0 ? leafOutline : index === 1 ? earthOutline : index === 2 ? flowerOutline : boatOutline} />
                </div>

                <h3 className="h3 card-title">{service.title}</h3>

                <p className="card-text">{service.description}</p>

                <a href="#" className="btn-link">
                  <span>{service.read_more}</span>
                  <IonIcon icon={arrowForward} aria-hidden="true" />
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServiceSection;

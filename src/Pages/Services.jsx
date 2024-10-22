import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../assets/Styles/Services.css";

// Importing images
import animal from "../assets/images/animal.webp";
import family from "../assets/images/family.webp";
import education from "../assets/images/education.jpg";
import skills from "../assets/images/skills.jpg";
import sports from "../assets/images/sports.jpg";
import women from "../assets/images/women.png";
import job from "../assets/images/job.jpg";
import water from "../assets/images/water.jpg";
import minority from "../assets/images/monority.jpg";
import animal2 from "../assets/images/world-animal.webp";

const Services = () => {
  const { t } = useTranslation();
  const [selectedService, setSelectedService] = useState(null);

  // Services data with dynamic image mapping
  const servicesData = t('services.servicesList', { returnObjects: true });

  // Map service ids to images (works for all languages)
  const imageMap = {
    1: animal,        // Animal Husbandry
    2: animal2,       // Dairying & Fisheries
    3: water,         // Drinking Water
    4: education,     // Education & Literacy
    5: family,        // Health & Family Welfare
    6: job,           // Labour & Employment
    7: minority,      // Minority Issues
    8: sports,        // Sports
    9: women,         // Women's Development & Empowerment
    10: animal2,      // Any Other
    11: skills,       // Skill Development
    12: animal2,      // Animal Welfare
  };

  const openPopup = (service) => {
    setSelectedService(service);
  };

  const closePopup = () => {
    setSelectedService(null);
  };

  useEffect(() => {
    document.title = t("services.title") + " | MAAM NGO";
  }, [t]);

  return (
    <div className="services-page">
      <h2>{t("services.title")}</h2>
      <div className="services-cards">
        {servicesData.map((service) => (
          <div
            key={service.id}
            className="service-page-card"
            onClick={() => openPopup(service)}
          >
            {/* Use the image mapped to the service id */}
            <img 
              src={imageMap[service.id]} 
              alt={service.title} 
            />
            <h3>{service.title}</h3>
          </div>
        ))}
      </div>

      {selectedService && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedService.title}</h3>
            <p>{selectedService.details}</p>
            <button className="close-btn" onClick={closePopup}>
              {t("services.popup.close")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;

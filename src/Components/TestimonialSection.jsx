import subtitleImg from "../assets/images/subtitle-img-green.png";
import newspapericon from "../assets/images/newspaper.png"; // Consider replacing this with the newspaper logo if needed
import testiBanner from "../assets/images/IMG-20241013-WA0039.jpg"; // Ensure this image reflects the newspaper cutting or replace it accordingly
import { useTranslation } from 'react-i18next';

const TestimonialSection = () => {
  const { t } = useTranslation();

  return (
    <section className="testi">
      <div className="testi-content">
        <p className="section-subtitle">
          <img
            src={subtitleImg}
            width="32"
            height="7"
            alt="Wavy line"
          />
          <span>{t('testimonials.title')}</span>
        </p>

        <h2 className="h2 section-title">
          {t('testimonials.subtitle')}
        </h2>

        <div className="testi-card">
          <figure className="card-avatar">
            <img
              src={newspapericon} 
              width="60"
              height="60"
              loading="lazy"
              alt={t('testimonials.avatarAlt')}
            />
          </figure>

          <div>
            <blockquote className="testi-text">
              {t('testimonials.quote')}
            </blockquote>

            <h3 className="testi-name">{t('testimonials.name')}</h3>
            <p className="testi-title">{t('testimonials.titleName')}</p>
          </div>
        </div>
      </div>

      <figure className="testi-banner">
        <img
          src={testiBanner} // Ensure this image reflects the newspaper cutting
          loading="lazy"
          alt={t('testimonials.bannerAlt')}
          className="img-cover"
        />
      </figure>
    </section>
  );
};

export default TestimonialSection;

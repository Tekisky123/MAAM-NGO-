import subtitleImg from "../assets/images/subtitle-img-green.png";
import testiAvatar from "../assets/images/testi-avatar.png";
import testiBanner from "../assets/images/IMG-20241013-WA0039.jpg";
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
              src={testiAvatar}
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
          src={testiBanner}
          loading="lazy"
          alt={t('testimonials.bannerAlt')}
          className="img-cover"
        />
      </figure>
    </section>
  );
};

export default TestimonialSection;

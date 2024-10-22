import { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importing useTranslation hook
import Slider from "react-slick";
import { FaUserTie, FaUserCircle, FaUser } from "react-icons/fa"; // Importing icons
import "../assets/Styles/AboutUs.css";
import img1 from "../assets/images/IMG-20241013-WA0034.jpg";
import img2 from "../assets/images/IMG-20241013-WA0035.jpg";
import img3 from "../assets/images/IMG-20241013-WA0037.jpg";
import img4 from "../assets/images/IMG-20241013-WA0038.jpg";

const AboutUs = () => {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("about1.title") + " | MAAM NGO";
  }, [t]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  return (
    <>
      <section className="about-section">
        <div className="slider-section">
          <Slider {...sliderSettings}>
            <div className="slider-item">
              <img src={img1} alt="Slide 1" />
              <div className="caption">{t("about1.slider.slide1")}</div>{" "}
              {/* Translated text */}
            </div>
            <div className="slider-item">
              <img src={img2} alt="Slide 2" />
              <div className="caption">{t("about1.slider.slide2")}</div>
            </div>
            <div className="slider-item">
              <img src={img3} alt="Slide 3" />
              <div className="caption">{t("about1.slider.slide3")}</div>
            </div>
            <div className="slider-item">
              <img src={img4} alt="Slide 4" />
              <div className="caption">{t("about1.slider.slide4")}</div>
            </div>
          </Slider>
        </div>
      </section>

      {/* Mission Section */}
      <div className="mission-section">
        <h2>{t("about1.mission.title")}</h2> {/* Translated title */}
        <p>{t("about1.mission.description")}</p> {/* Translated description */}
      </div>

      {/* Members Section */}
      <div className="members-section">
        <h2>{t("about1.members.title")}</h2> {/* Translated title */}
        <div className="members-cards">
          <div className="member-card">
            <FaUserTie className="member-icon" />
            <h3>{t("about1.members.secretary.name")}</h3>{" "}
            {/* Translated name */}
            <p>{t("about1.members.secretary.title")}</p>
          </div>
          <div className="member-card">
            <FaUserCircle className="member-icon" />
            <h3>{t("about1.members.president.name")}</h3>
            <p>{t("about1.members.president.title")}</p>
          </div>
          <div className="member-card">
            <FaUser className="member-icon" />
            <h3>{t("about1.members.treasurer.name")}</h3>
            <p>{t("about1.members.treasurer.title")}</p>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="testimonials-section">
        <h2>{t("about1.testimonials.title")}</h2> {/* Translated title */}
        <Slider {...sliderSettings}>
          <div className="testimonial-item">
            <p>{t("about1.testimonials.test1")}</p>{" "}
            {/* Translated testimonial */}
            <div className="testimonial-author">
              {t("about1.testimonials.author1")}
            </div>
          </div>
          <div className="testimonial-item">
            <p>{t("about1.testimonials.test2")}</p>
            <div className="testimonial-author">
              {t("about1.testimonials.author2")}
            </div>
          </div>
          <div className="testimonial-item">
            <p>{t("about1.testimonials.test3")}</p>
            <div className="testimonial-author">
              {t("about1.testimonials.author3")}
            </div>
          </div>
          <div className="testimonial-item">
            <p>{t("about1.testimonials.test4")}</p>
            <div className="testimonial-author">
              {t("about1.testimonials.author4")}
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
};

export default AboutUs;

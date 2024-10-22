import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { checkmarkCircle, heartOutline } from "ionicons/icons";
import deco from "../assets/images/deco-img.png";
import IMG1 from "../assets/images/IMG-20241013-WA0034.jpg";
import IMG2 from "../assets/images/IMG-20241013-WA0033.jpg";
import IMG3 from "../assets/images/IMG-20241013-WA0035.jpg";
import IMG4 from "../assets/images/IMG-20241013-WA0041.jpg";
import subtitle from "../assets/images/subtitle-img-green.png";
import { useTranslation } from "react-i18next"; // Import the translation hook
import { Link } from "react-router-dom";

const AboutSection = () => {
  const { t } = useTranslation(); // Call the useTranslation hook
  const [activeTab, setActiveTab] = useState("mission");

  const renderTabContent = () => {
    if (activeTab === "mission") {
      return (
        <>
          <p className="section-text">
            {t("about.missionDescription")}{" "}
            {/* Use translation for mission description */}
          </p>
          <ul className="tab-list">
            {t("about.tab.mission.content", { returnObjects: true }).map(
              (item, index) => (
                <li className="tab-item" key={index}>
                  <div className="item-icon">
                    <IonIcon icon={checkmarkCircle} />
                  </div>
                  <p className="tab-text">{item}</p>
                </li>
              )
            )}
          </ul>
        </>
      );
    } else if (activeTab === "vision") {
      return (
        <>
          <ul className="tab-list">
            {t("about.tab.vision.content", { returnObjects: true }).map(
              (item, index) => (
                <li className="tab-item" key={index}>
                  <div className="item-icon">
                    <IonIcon icon={checkmarkCircle} />
                  </div>
                  <p className="tab-text">{item}</p>
                </li>
              )
            )}
          </ul>
        </>
      );
    }
  };

  return (
    <section className="section about" id="about">
      <div className="container">
        <div className="about-banner">
          <h2 className="deco-title">{t("about.aboutTitle")}</h2>{" "}
          {/* Use translation for title */}
          <img src={deco} width="58" height="261" alt="" className="deco-img" />
          <div className="banner-row">
            <div className="banner-col">
              <img
                src={IMG1}
                width="315"
                height="380"
                loading="lazy"
                alt="MAAM Volunteers"
                className="about-img w-100"
              />
              <img
                src={IMG2}
                width="386"
                height="250"
                loading="lazy"
                alt="Community Work"
                className="about-img about-img-2 w-100"
              />
            </div>
            <div className="banner-col">
              <img
                src={IMG3}
                width="250"
                height="277"
                loading="lazy"
                alt="Medical Aid Distribution"
                className="about-img about-img-3 w-100"
              />
              <img
                src={IMG4}
                width="315"
                height="380"
                loading="lazy"
                alt="Charity Event"
                className="about-img w-100"
              />
            </div>
          </div>
        </div>

        <div className="about-content">
          <p className="section-subtitle">
            <img src={subtitle} width="32" height="7" alt="Wavy line" />
            <span>{t("about.welcome")}</span>{" "}
            {/* Use translation for welcome message */}
          </p>

          <h2 className="h2 section-title">
            {t("about.supportHumanity")}{" "}
            {/* Use translation for the support humanity text */}
            <strong>{t("about.welcome")}</strong>
          </h2>

          <ul className="tab-nav">
            <li>
              <button
                className={`tab-btn ${activeTab === "mission" ? "active" : ""}`}
                onClick={() => setActiveTab("mission")}
              >
                {t("about.tab.mission.title")}{" "}
                {/* Use translation for mission tab */}
              </button>
            </li>
            <li>
              <button
                className={`tab-btn ${activeTab === "vision" ? "active" : ""}`}
                onClick={() => setActiveTab("vision")}
              >
                {t("about.tab.vision.title")}{" "}
                {/* Use translation for vision tab */}
              </button>
            </li>
          </ul>

          <div className="tab-content">{renderTabContent()}</div>

          <Link to="/about">
            <button className="btn btn-secondary">
              <span>{t("about.learnMore")}</span>{" "}
              <IonIcon icon={heartOutline} aria-hidden="true" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

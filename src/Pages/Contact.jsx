import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../assets/Styles/Contact.css";

const Contact = () => {
  
  const { t } = useTranslation();
  useEffect(() => {
    document.title = `${t("contact.heading")} | MAAM NGO`;
  }, [t]);

  return (
    <div className="form-body">
      <div className="donation-section">
        <div className="donation-container">
          <h1 className="donation-heading">{t("contact.heading")}</h1>

          <div className="form-card">
            <h2 className="form-heading">{t("contact.formTitle")}</h2>
            <form>
              <div className="form-grid">
                <input
                  type="text"
                  className="input-field"
                  placeholder={t("contact.namePlaceholder")}
                  required
                />
                <input
                  type="email"
                  className="input-field"
                  placeholder={t("contact.emailPlaceholder")}
                  required
                />
                <input
                  type="text"
                  className="input-field"
                  placeholder={t("contact.subjectPlaceholder")}
                  required
                />
              </div>
              <textarea
                className="input-field"
                rows="5"
                placeholder={t("contact.messagePlaceholder")}
                required
              ></textarea>
              <button type="submit" className="btn-submit">
                {t("contact.submit")}
              </button>
            </form>
          </div>

          <div className="address-section">
          <h2 className="form-heading">{t("contact.addressTitle")}</h2>
          <p className="address-details">
            {t("contact.addressLine1")}
            <br />
            {t("contact.addressLine2")}
            <br />
            {t("contact.city")}, {t("contact.state")}
            <br />
            {t("contact.country")} - {t("contact.zipCode")}
          </p>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

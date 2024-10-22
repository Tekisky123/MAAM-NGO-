import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <ul className="footer-list">
            <li>
              <a href="#" className="footer-link">
                {t("footer.terms")}
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                {t("footer.privacy")}
              </a>
            </li>
          </ul>

          <p className="copyright">
            {t("footer.copyright")}{" "}
          
            {t("footer.allRightsReserved")}
          </p>

          <div className="footer-bottom">
            <p className="developed-by">
              {t("footer.developedBy")}{" "}
              <a
                href="https://tekisky.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://tekisky.com/assets/WhatsApp_Image_2024-04-30_at_12.39.09_86de1ffc-removebg-preview-2SydUlQw.png"
                  alt="Tekisky Logo"
                  className="footerlogo"
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/components/Header.jsx
import { useEffect } from "react";
import { IonIcon } from "@ionic/react";
import {
  menuOutline,
  closeOutline,
  chevronForwardOutline,
  heartOutline,
} from "ionicons/icons";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import useTranslation

const Header = () => {
  const { t, i18n } = useTranslation(); // Use translation hook

  useEffect(() => {
    const navOpenBtn = document.querySelector("[data-nav-open-btn]");
    const navbar = document.querySelector("[data-navbar]");
    const navCloseBtn = document.querySelector("[data-nav-close-btn]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const header = document.querySelector("[data-header]");

    // Toggle Navbar
    const toggleNavbar = () => {
      navbar.classList.toggle("active");
    };

    navOpenBtn.addEventListener("click", toggleNavbar);
    navCloseBtn.addEventListener("click", toggleNavbar);

    // Close navbar on link click
    navbarLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.classList.remove("active");
      });
    });

    // Add 'active' class to header on scroll
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        header.classList.add("active");
      } else {
        header.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listeners on unmount
    return () => {
      navOpenBtn.removeEventListener("click", toggleNavbar);
      navCloseBtn.removeEventListener("click", toggleNavbar);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Change language function
  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("i18nextLng", newLanguage); // Save language to local storage
  };

  return (
    <header className="header" data-header>
      <div className="container">
        <h1>
          <Link to="/" className="logo">
            MAAM
          </Link>
        </h1>

        <nav className="navbar" data-navbar>
          <button
            className="nav-close-btn"
            aria-label="Close Menu"
            data-nav-close-btn
          >
            <IonIcon icon={closeOutline} />
          </button>

          <ul className="navbar-list">
            <li>
              <Link to="/" className="navbar-link" data-nav-link>
                <span>{t("Home")}</span>
                <IonIcon icon={chevronForwardOutline} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="/about" className="navbar-link" data-nav-link>
                <span>{t("About")}</span>
                <IonIcon icon={chevronForwardOutline} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="/service" className="navbar-link" data-nav-link>
                <span>{t("Service")}</span>
                <IonIcon icon={chevronForwardOutline} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="/donation" className="navbar-link" data-nav-link>
                <span>{t("Donate")}</span>
                <IonIcon icon={chevronForwardOutline} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="/event" className="navbar-link" data-nav-link>
                <span>{t("Event")}</span>
                <IonIcon icon={chevronForwardOutline} aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="#" className="navbar-link" data-nav-link>
                <span>{t("Contact")}</span>
                <IonIcon icon={chevronForwardOutline} aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </nav>
        <div className="header-action">
          <div className="language-selector">
            <select
              name="language"
              className="lang-switch"
              onChange={handleLanguageChange}
              value={i18n.language} // Set the selected value based on the current language
            >
              <option value="en">English</option>
              <option value="ur">Urdu</option>
              <option value="mr">Marathi</option>
              <option value="hi">Hindi</option>
            </select>
          </div>

          <Link to="/donation">
            <button className="btn btn-primary donation-btn">
              <span>{t("Donation")}</span>
              <IonIcon icon={heartOutline} aria-hidden="true" />
            </button>
          </Link>
        </div>
        <button
          className="nav-open-btn"
          aria-label="Open Menu"
          data-nav-open-btn
        >
          <IonIcon icon={menuOutline} />
        </button>
      </div>
    </header>
  );
};

export default Header;

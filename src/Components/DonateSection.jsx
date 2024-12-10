import { useTranslation } from "react-i18next";
import img1 from "../assets/images/IMG-20241013-WA0031.jpg"; // Sewing Machines
import img2 from "../assets/images/IMG-20241013-WA0042.jpg"; // Empowering Women
import img3 from "../assets/images/IMG-20241013-WA0043.jpg"; // Support Women
import img4 from "../assets/images/IMG-20241013-WA0040.jpg"; // Youth Helping
import { Link } from "react-router-dom";

const imageMapping = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
};

const DonateSection = () => {
  const { t } = useTranslation();

  const cards = t("donate.cards", { returnObjects: true });

  return (
    <section className="section donate" id="donate">
      <div className="container">
        <ul className="donate-list">
          {cards.map((item) => (
            <li key={item.id}>
              <div className="donate-card">
                <figure className="card-banner">
                  <img
                    src={imageMapping[item.id]}
                    width="520"
                    height="325"
                    loading="lazy"
                    alt={t("donate.imageAlt", { index: item.id })}
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  

                  <h3 className="h3 card-title">{t(item.title)}</h3>

                  

                  <Link to="/donation">
                    <button className="btn btn-secondary">
                      <span>{t("donate.donation")}</span>
                      <ion-icon
                        name="heart-outline"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default DonateSection;

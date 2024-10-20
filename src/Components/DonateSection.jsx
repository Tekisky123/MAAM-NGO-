import img1 from "../assets/images/IMG-20241013-WA0031.jpg";
import img2 from "../assets/images/IMG-20241013-WA0036.jpg";
import img3 from "../assets/images/IMG-20241013-WA0035.jpg";
import img4 from "../assets/images/IMG-20241013-WA0038.jpg";
import { useTranslation } from 'react-i18next';

const DonateSection = () => {
  const { t } = useTranslation();

  const donateItems = [
    {
      imgSrc: img1,
      raised: 256,
      goal: 34562,
      raise: 562,
      toGo: 864,
      title: "Raise Hand To Save ........"
    },
    {
      imgSrc: img2,
      raised: 256,
      goal: 34562,
      raise: 562,
      toGo: 864,
      title: "Raise Hand To Save ........"
    },
    {
      imgSrc: img3,
      raised: 256,
      goal: 34562,
      raise: 562,
      toGo: 864,
      title: "Raise Hand To Save ........"
    },
    {
      imgSrc: img4,
      raised: 256,
      goal: 34562,
      raise: 562,
      toGo: 864,
      title: "Raise Hand To Save ........"
    }
  ];

  return (
    <section className="section donate" id="donate">
      <div className="container">
        <ul className="donate-list">
          {donateItems.map((item, index) => (
            <li key={index}>
              <div className="donate-card">
                <figure className="card-banner">
                  <img
                    src={item.imgSrc}
                    width="520"
                    height="325"
                    loading="lazy"
                    alt={t('donate.imageAlt', { index: index + 1 })}
                    className="img-cover"
                  />
                </figure>

                <div className="card-content">
                  <div className="progress-wrapper">
                    <p className="progress-text">
                      <span>{t('donate.raised')}</span>
                      <data value={item.raised}>${item.raised}</data>
                    </p>
                    <data className="progress-value" value={(item.raised / item.goal * 100).toFixed(0)}>
                      {(item.raised / item.goal * 100).toFixed(0)}%
                    </data>
                  </div>

                  <div className="progress-box">
                    <div className="progress" style={{ width: `${(item.raised / item.goal) * 100}%` }}></div>
                  </div>

                  <h3 className="h3 card-title">{t('donate.sectionTitle', { title: item.title })}</h3>

                  <div className="card-wrapper">
                    <p className="card-wrapper-text">
                      <span>{t('donate.goal')}</span>
                      <data className="green" value={item.goal}>
                        ${item.goal}
                      </data>
                    </p>

                    <p className="card-wrapper-text">
                      <span>{t('donate.raise')}</span>
                      <data className="yellow" value={item.raise}>
                        ${item.raise}
                      </data>
                    </p>

                    <p className="card-wrapper-text">
                      <span>{t('donate.toGo')}</span>
                      <data className="cyan" value={item.toGo}>
                        ${item.toGo}
                      </data>
                    </p>
                  </div>

                  <button className="btn btn-secondary">
                    <span>{t('donate.donation')}</span>
                    <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
                  </button>
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

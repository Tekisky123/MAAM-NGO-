import { useTranslation } from "react-i18next";
import subtitleImg from "../assets/images/subtitle-img-green.png";
import { Link } from "react-router-dom";

const EventSection = () => {
  const { t } = useTranslation();

  // Fetch the events data from translation
  const events = t("events.eventList", { returnObjects: true });

  return (
    <section className="section event" id="event">
      <div className="container">
        <p className="section-subtitle">
          <img src={subtitleImg} width="32" height="7" alt="Wavy line" />
          <span>{t("events.subtitle")}</span>
          <img src={subtitleImg} width="32" height="7" alt="Wavy line" />
        </p>

        <h2 className="h2 section-title">{t("events.title")}</h2>

        <ul className="event-list">
          {events.map((event) => (
            <li key={event.id}>
              <div className="event-card">
                <time className="card-time" dateTime={event.date}>
                  <span className="month">{event.month}</span>
                  <span className="date">{event.date.split("-")[1]}</span>
                </time>

                <div className="wrapper">
                  <div className="card-content">
                    <p className="card-subtitle">{event.subtitle}</p>
                    <h3 className="card-title">{event.title}</h3>
                    <p className="card-text">{event.text}</p>
                  </div>

                  <Link to="/event">
                    <button className="btn btn-white">
                      <span>{t("events.viewEvents")}</span>
                      <ion-icon
                        name="arrow-forward"
                        aria-hidden="true"
                      ></ion-icon>
                    </button>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <Link to="/about">
          <button className="btn btn-secondary">
            <span>{t("events.learnMore")}</span>
            <ion-icon name="heart-outline" aria-hidden="true"></ion-icon>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default EventSection;

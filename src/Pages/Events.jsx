import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import '../assets/Styles/Events.css'; 
import animal from "../assets/images/animal.webp";
import family from "../assets/images/family.webp";
import education from "../assets/images/education.jpg";
import skills from "../assets/images/skills.jpg";
import sports from "../assets/images/sports.jpg";
import women from "../assets/images/women.png";
import job from "../assets/images/job.jpg";
import water from "../assets/images/water.jpg";
import minority from "../assets/images/monority.jpg";
import animal2 from "../assets/images/world-animal.webp";

const imageMap = {
  1: animal, 
  2: family,
  3: education,
  4: skills,
  5: sports,
  6: women,
  7: job,
  8: water,
  9: minority,
  10: animal2,
};

const Events = () => {
  const { t } = useTranslation();

  useEffect(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const revealLines = () => {
      timelineItems.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (itemTop < windowHeight - 100) {
          item.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', revealLines);
    revealLines();

    return () => {
      window.removeEventListener('scroll', revealLines);
    };
  }, []);

  useEffect(() => {
    document.title = t("events.subtitle") + " | MAAM NGO";
  }, [t]);

  // Fetching event data from translations
  const eventsData = t("events1.eventsList", { returnObjects: true });

  return (
    <div className='events'>
      <div className="events-container">
        <h1 className="events-title">{t("events1.title")}</h1>
        <div className="timeline">
          {eventsData.map((event, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-content">
                <img src={imageMap[event.id]} alt={event.description} className="event-image" />
                <h2 className="event-date">{event.date}</h2>
                <h3 className="event-place">{event.place}</h3>
                <p className="event-description">{event.description}</p>
              </div>
            </div>
          ))}
          <div className="timeline-line"></div>
        </div>
      </div>
    </div>
  );
};

export default Events;

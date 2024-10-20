import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/Styles/AboutUs.css"; // Link to your custom CSS

const AboutUs = () => {
  useEffect(() => {
    document.title = "About Us | MAAM"; // Set the page title
  }, []);

  return (
    <div className="about-us-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="about-container">
          <h1>About MAAM</h1>
          <p>Empowering communities through healthcare and social support.</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision-section">
        <div className="container">
          <div className="mission-vision-text">
            <h2>Our Mission & Vision</h2>
            <p>
              MAAM is focused on delivering high-quality healthcare and social
              services, especially to underserved communities. Our goal is to
              make healthcare and essential services accessible for everyone.
            </p>
            <p>
              From hospital work and COVID-19 relief to blood donations and
              janaza gaadi services, we are committed to making a positive
              impact in people’s lives.
            </p>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="founders-section">
        <div className="container">
          <h2>Our Founders</h2>
          <div className="founder-cards">
            <div className="founder-card">
              <img src="/images/founder1.jpg" alt="Founder 1" />
              <h3>Founder One</h3>
              <p>
                Founder One has been a pillar in social healthcare for over 20
                years, providing leadership and inspiration to our team.
              </p>
            </div>
            <div className="founder-card">
              <img src="/images/founder2.jpg" alt="Founder 2" />
              <h3>Founder Two</h3>
              <p>
                With a background in public health, Founder Two has dedicated
                their career to uplifting communities through innovative
                services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="achievements-section">
        <div className="container">
          <h2>Our Achievements</h2>
          <div className="achievements-grid">
            <div className="achievement">
              <h3>5000+</h3>
              <p>Lives Touched</p>
            </div>
            <div className="achievement">
              <h3>150+</h3>
              <p>Successful Projects</p>
            </div>
            <div className="achievement">
              <h3>2000+</h3>
              <p>Donations Received</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Join Us in Our Mission</h2>
          <p>Support our initiatives to bring lasting change to communities.</p>
          <Link to="/donation" className="cta-button">
            Donate Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

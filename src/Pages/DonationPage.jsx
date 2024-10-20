import { useState } from "react";
import { IonIcon } from "@ionic/react";
import { qrCodeOutline, cardOutline } from "ionicons/icons";
import { useTranslation } from "react-i18next";

const DonationPage = () => {
  const { t } = useTranslation(); // Use translation hook
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
  });

  const [showQRCode, setShowQRCode] = useState(false); // To show/hide QR code
  const [activeTab, setActiveTab] = useState("bank"); // To track active tab

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const whatsappMessage = `
      *Donation Request* 📦
  
      *Donor Information:*
      - **Name:** ${formData.name}
      - **Email:** ${formData.email}
      - **Phone:** ${formData.phone}
  
      *Donation Details:*
      - **Amount:** ₹${formData.amount}
      - **Message:** ${formData.message}
  
      Thank you for your generosity! Your contribution will make a difference.
    `;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/919373960682?text=${encodedMessage}`, "_blank");
  };

  const handleQRCodeClick = () => {
    setShowQRCode(true); // Display QR code when clicked
    setActiveTab("qr"); // Set active tab to QR
  };

  const handleBankDetailsClick = () => {
    setShowQRCode(false); // Hide QR code when clicked
    setActiveTab("bank"); // Set active tab to Bank Details
  };

  return (
    <div className="form-body">
      <section className="donation-section">
        <div className="donation-container">
          <h1 className="donation-heading">{t("donation.heading")}</h1>

          {/* Payment Options */}
          <div className="payment-options">
            <div
              className={`option-card ${activeTab === "qr" ? "active" : ""}`}
              onClick={handleQRCodeClick}
            >
              <IonIcon icon={qrCodeOutline} size="large" className="icon" />
              <h3>{t("donation.payViaQR")}</h3>
            </div>
            <div
              className={`option-card ${activeTab === "bank" ? "active" : ""}`}
              onClick={handleBankDetailsClick}
            >
              <IonIcon icon={cardOutline} size="large" className="icon" />
              <h3>{t("donation.getBankDetails")}</h3>
            </div>
          </div>

          {/* Conditionally render QR code */}
          {showQRCode ? (
            <div className="form-card ">
              <div className="qr-code-section">
                <img
                  src="https://img.freepik.com/free-vector/scan-me-qr-code_78370-2915.jpg"
                  alt="Dummy QR Code"
                  className="qr-code"
                />
              </div>
              <p className="qr-message">{t("donation.scanQRCode")}</p>
            </div>
          ) : (
            <div className="form-card">
              <h2 className="form-heading">{t("donation.form.heading")}</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <input
                    type="text"
                    name="name"
                    placeholder={t("donation.form.name")}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder={t("donation.form.email")}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                  <input
                    type="text"
                    name="phone"
                    placeholder={t("donation.form.phone")}
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                  <input
                    type="number"
                    name="amount"
                    placeholder={t("donation.form.amount")}
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                    className="input-field"
                  />
                </div>
                <textarea
                  name="message"
                  placeholder={t("donation.form.message")}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="input-field"
                ></textarea>
                <button type="submit" className="btn-submit">
                  {t("donation.form.submit")}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default DonationPage;

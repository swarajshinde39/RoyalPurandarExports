import React from "react";
import "./AboutUs.css";
import iec_logo from "../../assets/iec-logo.png";
import gst_logo from "../../assets/servicetax_logo.png";
import msme_logo from "../../assets/MSME_logo.jpeg";
import udyog_adhar from "../../assets/udyogaadhaar.png";
import fssai_logo from "../../assets/fssai-logo.png";
import apeda_logo from "../../assets/Apeda-logo.png";
import sbb_logo from "../../assets/spice-logo.png";
import msg_icon from "../../assets/msg-icon.png";
import mail_icon from "../../assets/mail-icon.png";
import phone_icon from "../../assets/phone-icon.png";
import location_icon from "../../assets/location-icon.png";
import white_arrow from "../../assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "6a275f9b-fec6-4d25-a6f0-0b93c2f70078");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send Us a Message <img src={msg_icon} alt="" />
        </h3>
        <p>
          Feel free to reach out through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service.
        </p>
        <ul>
          <li>
            <img src={mail_icon} alt="" />
            Sales.royalpurandarexports@gmail.com
          </li>
          <li>
            <img src={phone_icon} alt="" />
            +91-7770089212
          </li>
          <li>
            <img src={location_icon} alt="" />
            476/A, Shirwal, Tal:-Khanda, Dist:-Satara, 412801,Maharashtra,
            India.
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit={onSubmit}>
          <label htmlFor="">Your name</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
            required
          />
          <label htmlFor="">Phone Number</label>
          <input
            type="tel"
            name="phone"
            placeholder="Enter Your Mobile Number"
            required
          />
          <label htmlFor="">Write Your Message Here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter Your Message"
            required
          ></textarea>
          <button type="submit" className="btn-- dark">
            Submit Now <img src={white_arrow} alt="" />
          </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  );
};

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Header Section */}
      <div className="about-header">
        <h1>About us</h1>
        <p>
          Royal Purandar Export, established by Mr. Akash Waghole in Satara,
          Maharashtra, India, is your trusted partner for premium exports. We
          pride ourselves on being a bridge between India’s rich heritage and
          the global marketplace.
        </p>
      </div>

      {/* What We Believe Section */}
      <div className="beliefs-container">
        <h1 className="title">What We Believe</h1>
        <div className="beliefs-grid">
          <div className="belief-card">
            <h2 className="belief-title">Our Mission</h2>
            <p className="belief-description">
              Our mission at Radhe Export is to bridge the gap between India's
              rich heritage and the global market by exporting high-quality
              products that embody the essence of Indian craftsmanship and
              agriculture. We are committed to delivering excellence, ensuring
              that every product we export meets the highest standards of
              quality and authenticity.
            </p>
          </div>

          <div className="belief-card">
            <h2 className="belief-title">Our Vision</h2>
            <p className="belief-description">
              Our vision is to become a leading global exporter recognized for
              our integrity, reliability, and commitment to quality. We aim to
              expand our reach to new markets worldwide, continually innovating
              and adapting to meet the diverse needs of our international
              clients while promoting sustainable practices and preserving the
              cultural heritage of India.
            </p>
          </div>

          <div className="belief-card">
            <h2 className="belief-title">Quality Control</h2>
            <p className="belief-description">
              At Radhe Export, quality control is a cornerstone of our
              operations, ensuring that every product we export meets the
              highest standards of excellence. Our commitment to quality begins
              with the careful selection of our suppliers and partners, as we
              believe that sourcing the best raw materials is essential for
              delivering superior products.
            </p>
          </div>

          <div className="belief-card">
            <h2 className="belief-title">Proper Packaging</h2>
            <p className="belief-description">
              Our packaging process begins with selecting the right materials
              for each product type. For perishable items like fresh produce, we
              use temperature-controlled packaging and moisture-resistant
              materials to maintain freshness. Spices and dehydrated products
              are packed in airtight containers to preserve their flavor and
              aroma.
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 - Empower Small Business */}
      <div className="slider">
        <div className="slider-track">
          <div className="slide">
            <img src={iec_logo} alt="IEC" />
          </div>
          <div className="slide">
            <img src={gst_logo} alt="GST" />
          </div>
          <div className="slide">
            <img src={msme_logo} alt="MSME" />
          </div>
          <div className="slide">
            <img src={udyog_adhar} alt="UDYOG AADHAR" />
          </div>
          <div className="slide">
            <img src={fssai_logo} alt="FSSAI" />
          </div>
          <div className="slide">
            <img src={apeda_logo} alt="APEDA" />
          </div>
          <div className="slide">
            <img src={sbb_logo} alt="SPICE BOARD BHARAT" />
          </div>

          {/* Duplicate for infinite effect */}
          <div className="slide">
            <img src={iec_logo} alt="IEC" />
          </div>
          <div className="slide">
            <img src={gst_logo} alt="GST" />
          </div>
          <div className="slide">
            <img src={msme_logo} alt="MSME" />
          </div>
          <div className="slide">
            <img src={udyog_adhar} alt="UDYOG AADHAR" />
          </div>
          <div className="slide">
            <img src={fssai_logo} alt="FSSAI" />
          </div>
          <div className="slide">
            <img src={apeda_logo} alt="APEDA" />
          </div>
          <div className="slide">
            <img src={sbb_logo} alt="SPICE BOARD BHARAT" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contact, AboutUs };

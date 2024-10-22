import React from "react";
import "./Slider.css";
import iec_logo from "../../assets/iec-logo.png";
import gst_logo from "../../assets/servicetax_logo.png";
import msme_logo from "../../assets/MSME_logo.jpeg";
import udyog_adhar from "../../assets/udyogaadhaar.png";
import fssai_logo from "../../assets/fssai-logo.png";
import apeda_logo from "../../assets/Apeda-logo.png";
import sbb_logo from "../../assets/spice-logo.png";

const Slider = () => {
  return (
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
  );
};

export default Slider;

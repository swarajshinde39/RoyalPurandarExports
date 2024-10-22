import React from "react";
import "./Programs.css";
import program_1 from "../../assets/program-1.png";
import program_2 from "../../assets/program-2.png";
import program_3 from "../../assets/program-3.png";
import program_4 from "../../assets/program-4.png";
import program_5 from "../../assets/program-5.png";
import program_6 from "../../assets/program-6.png";

const Programs = () => {
  return (
    <div className="programs">
      <div className="program">
        <img src={program_1} alt="" />
        <div className="caption">
          <p>We Build Relations</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="" />
        <div className="caption">
          <p>Experience and Professional</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="" />
        <div className="caption">
          <p>High Quality Products</p>
        </div>
      </div>
      <div className="program">
        <img src={program_4} alt="" />
        <div className="caption">
          <p>We Deliver on Time</p>
        </div>
      </div>
      <div className="program">
        <img src={program_5} alt="" />
        <div className="caption">
          <p>Price Benefit</p>
        </div>
      </div>
      <div className="program">
        <img src={program_6} alt="" />
        <div className="caption">
          <p>Complete Client Satisfaction</p>
        </div>
      </div>
    </div>
  );
};

export default Programs;

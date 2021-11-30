import React from "react";
import "./landingView.css";
function LandingView() {
  return (
    <div className="landing">
      <div className="landing-left">
        <div class="landing-left-wrapper">
          <h2 className="name-intro"> Karibu, my name is</h2>
          <h1 className="name">Finyahrua Adrian John</h1>
          <div className="skills">
            <div className="skills-wrapper">
              <div className="skills-item">Web Developer</div>
              <div className="skills-item">React Native Developer </div>
              <div className="skills-item">Designer </div>
              <div className="skills-item">Developer </div>
              <div className="skills-item">Creator </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing-right">rignt</div>
    </div>
  );
}

export default LandingView;

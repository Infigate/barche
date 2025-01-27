import React from 'react';
import sushi from '../assets/ele/sushi.png';
import rocket from '../assets/ele/rocket.png';
import japan from '../assets/ele/japan.png';
import empty from '../assets/ele/empty.png';

const HeroSection: React.FC = () => {
  return (
    <div className="container-fluid hero-section align-items-center" id="top">
      <div className="row">
        {/* 左カラム */}
        <div className="col-md-6 text-center text-md-start p-5">
          <p className="h4 dot-font">
            {'> BarchE / % echo "arch" | sed "s/^/b/; s/\\$/e/"'}
          </p>
          <img src={sushi} alt="Sushi" className="sushi-image" />
          <img src={rocket} alt="Rocket" className="rocket-image hover-float" />
        </div>

        {/* 右カラム */}
        <div className="col-md-6 text-end text-end p-5">
          <p className="h4 text-end dot-font">January 2025</p>
          <img src={japan} alt="Japan" className="japan-image" />
          <img src={empty} alt="Empty" className="empty-image" />
          <p className="big-text mb-0 dot-font">Fun as the Key to Growth</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
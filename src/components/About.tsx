import React from 'react';
import barche from '../assets/ele/barche.svg';
import oji from '../assets/ele/oji.png';
import work from '../assets/ele/work.svg';

const About: React.FC = () => {
  return (
    <>
      <div className="container-fluid about-section align-items-center position-relative">
        <div className="row bg-black">
          <div className="col-md-9 text-center p-5 bg-white">
            <img src={barche} alt="Sample" className="d-block mx-auto mb-3 img-fluid" />
            <p className="h4 dot-font text-black">{'[Bridge the Business & Entertainment]'}</p>
            <img src={oji} alt="Sample" className="d-block mx-auto mb-3 about-img" />
          </div>
        </div>
      </div>

      <div className="container-fluid about-section align-items-center position-relative">
        <div className="row bg-black">
          <div className="col-12 text-center text-white">
            <div className="text-content dot-font">
              <h2 className="h3">Creating New Norms</h2>
              <p className="h4 mb-5">Providing a Platform to Infinitely Expand Business and Entertainment</p>
              <p className="h4 mb-2">• Creativity</p>
              <p className="mb-4">- Continuously adopting new perspectives to deliver innovative value.</p>
              <p className="h4 mb-2">• Customer-Centric Approach</p>
              <p className="mb-4">- Pursuing customer needs and designing experiences that prioritize customer satisfaction.</p>
              <p className="h4 mb-2">• Co-Creation and Collaboration</p>
              <p className="mb-4">- Emphasizing partnerships to drive a future of shared growth.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid about-section align-items-center position-relative">
        <div className="row bg-black justify-content-center">
          <div className="col-8 text-white">
            <img src={work} alt="Sample" className="d-block mx-auto mb-5 w-100" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

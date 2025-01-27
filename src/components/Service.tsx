import React from 'react';
import service from '../assets/ele/service.svg';

const Service: React.FC = () => {
  return (
    <div className="container-fluid align-items-center service-section" id="services">
      <div className="row bg-black">
        <div className="offset-3 col-9 text-center p-5 bg-white">
          <img 
            src={service} 
            alt="Service Image" 
            className="d-block mx-auto mb-3 w-100 h-100 img-fluid" 
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
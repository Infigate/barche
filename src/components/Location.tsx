import React from 'react';
import Map from './Map';

const Location: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* 左半分: 住所 */}
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2 className="mb-3">BarchE Inc.</h2>
          <p>3-20, Tsukisamu Higashi 3-jo 7-chome</p>
          <p>Toyohira-ku, Sapporo, Hokkaido</p>
          <p>062-0053, Japan</p>
        </div>

        {/* 右半分: マップ */}
        <div className="col-md-6">
          <Map />
        </div>
      </div>
    </div>
  );
};

export default Location;
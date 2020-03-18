import React from 'react';
import './loading_comp.style.css';

export const Loading = () => {
    return(
<div className="loadingDiv spinner-box">
  <div className="solar-system">
    <div className="earth-orbit orbit">
      <div className="planet earth"></div>
      <div className="venus-orbit orbit">
        <div className="planet venus"></div>
        <div className="mercury-orbit orbit">
          <div className="planet mercury"></div>
          <div className="sun"></div>
        </div>
      </div>
    </div>
  </div>
</div>
    )

}
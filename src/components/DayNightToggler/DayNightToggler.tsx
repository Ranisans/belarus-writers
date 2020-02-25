import React from 'react';

import './DayNightToggler.scss';

interface PropsType {
  toggler: any;
}

const DayNightToggler = ({ toggler }: PropsType) => {
  return (
    <div className="toggle">
      <input className="toggle-input" type="checkbox" onChange={toggler} />
      <div className="toggle-bg" />
      <div className="toggle-switch">
        <div className="toggle-switch-figure" />
        <div className="toggle-switch-figureAlt" />
      </div>
    </div>
  );
};

export default DayNightToggler;

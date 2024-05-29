import React, { useState } from 'react';
import checkIcon from "../images/icon-check.svg";

const TickIcon = () => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div 
      className={`tick ${isClicked ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      <img src={checkIcon} alt="Check" />
    </div>
  );
}

export default TickIcon;

import React, { useState } from 'react';
import '../index.css'; 
import moonIcon from '../images/icon-moon.svg'; 
import sunIcon from '../images/icon-sun.svg'; 

const Theme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
      <button className="theme-toggle" onClick={toggleTheme}>
        <img src={isDarkTheme ? sunIcon : moonIcon} alt={isDarkTheme ? 'Sun' : 'Moon'} />
      </button>
    </div>
  );
}

export default Theme;
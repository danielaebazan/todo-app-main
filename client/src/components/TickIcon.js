import React from 'react';
import checkIcon from "../images/icon-check.svg";

const TickIcon = ({ task, getData }) => {
  const handleClick = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ completed: !task.completed })
      });
      if (response.status === 200) {
        getData();
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div 
      className={`tick ${task.completed ? 'clicked' : ''}`} 
      onClick={handleClick}
    >
      <img src={checkIcon} alt="Check" />
    </div>
  );
}

export default TickIcon;


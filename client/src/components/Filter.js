import React from 'react';

const Filter = ({ setFilter }) => {
  return (
    <div className="filter">
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('active')}>Active</button>
      <button onClick={() => setFilter('completed')}>Completed</button>
    </div>
  );
};

export default Filter;


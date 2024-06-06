import React from 'react';

const Filter = ({ selectedFilter, setSelectedFilter }) => {
  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="filter">
      <button
        className={selectedFilter === 'all' ? 'active' : ''}
        onClick={() => handleFilterChange('all')}
      >
        All
      </button>
      <button
        className={selectedFilter === 'active' ? 'active' : ''}
        onClick={() => handleFilterChange('active')}
      >
        Active
      </button>
      <button
        className={selectedFilter === 'completed' ? 'active' : ''}
        onClick={() => handleFilterChange('completed')}
      >
        Completed
      </button>
    </div>
  );
};

export default Filter;

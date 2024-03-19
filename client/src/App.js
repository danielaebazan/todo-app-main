import React from 'react';
import './index.css'; 
import ListHeader from './components/ListHeader';
import Theme from './components/Theme'; 

const App = () => {
  return (
    <div className="app">
      <ListHeader listName={'TO DO'} />
      {/* Render the Theme component */}
      <Theme />
    </div>
  );
}

export default App;


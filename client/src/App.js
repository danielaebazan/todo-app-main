import React, { useEffect } from 'react';
import './index.css'; 
import ListHeader from './components/ListHeader';
import Theme from './components/Theme'; 



const App = () => {

  const getData = async () => {
    try {
      const response = await fetch(`http://localhost:8000/todos`)
      const json = await response.json()
      console.log(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData, [])

  return (
    <div className="app">
      <ListHeader listName={'TO DO'} />
      {/* Render the Theme component */}
      <Theme />
    </div>
  );
}

export default App;


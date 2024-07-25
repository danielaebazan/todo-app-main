import React, { useEffect, useState } from 'react';
import './index.css'; 
import ListHeader from './components/ListHeader';
import Theme from './components/Theme'; 
import ListItem from './components/ListItem'
import ListFooter from './components/ListFooter';
import Filter from './components/Filter';


const App = () => {
  const [tasks, setTasks] = useState(null);
  const [filter, setFilter] = useState('all'); 

const getData = async () => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`, {
      mode: 'cors'
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    setTasks(json);
  } catch (err) {
    console.error("Fetching data failed:", err);
  }
};

  useEffect(() => {
    getData();
  }, []);

  console.log(tasks);

  // Sort by date 
  const sortedTasks = tasks?.sort((a, b) => new Date(a.date) - new Date(b.date));

  // Filter tasks based on the current filter state
  const filteredTasks = sortedTasks?.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true; // 'all' case
  });

  return (
    <div className="app">
      <div className="header">
        <ListHeader listName={'T O D O'} getData={getData} />
      </div>
      <Theme />
      {filteredTasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
      {tasks && (
        <ListFooter tasks={tasks} getData={getData} />
      )}
      {tasks && (
        <Filter setFilter={setFilter} /> 
      )}
    </div>
  );
};

export default App;

import React, { useEffect, useState } from 'react';
import './index.css'; 
import ListHeader from './components/ListHeader';
import Theme from './components/Theme'; 
import ListItem from './components/ListItem'
import ListFooter from './components/ListFooter';
import Filter from './components/Filter';



const App = () => {
  const [ tasks, setTasks] = useState(null)

  const getData = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/todos`)
      const json = await response.json()
      setTasks(json)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => getData, [])
  

  console.log(tasks)

  //Sort by date 
  const sortedTasks = tasks?.sort((a,b) => new Date(a.date) - new Date(b.date))

  return (
    <div className="app">
      <div className="header">
        <ListHeader listName={'T O D O'} getData={getData} />
      </div>
      <Theme />
      {sortedTasks?.map((task) => (
        <ListItem key={task.id} task={task} getData={getData} />
      ))}
      {tasks && (
        <ListFooter tasks={tasks} getData={getData} />
      )}
            {tasks && (
        <Filter tasks={tasks} getData={getData} />
      )}
    </div>
  );
};

export default App;


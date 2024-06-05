import React, { useEffect, useState } from 'react';
import './index.css'; 
import ListHeader from './components/ListHeader';
import Theme from './components/Theme'; 
import ListItem from './components/ListItem'


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
      <ListHeader listName={'TO DO'} getData={getData} />
      </div>
      <Theme />
      {sortedTasks?.map((task) => <ListItem key={task.id} task={task} getData={getData} />)}
    </div>
  );
}

export default App;


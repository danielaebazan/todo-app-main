import React from 'react';

const ListFooter = ({ tasks, getData }) => {
  const remainingTasksCount = tasks.filter(task => !task.completed).length;

  const clearCompleted = async () => {
    try {
      const completedTasks = tasks.filter(task => task.completed);
      await Promise.all(completedTasks.map(task =>
        fetch(`${process.env.REACT_APP_SERVERURL}/todos/${task.id}`, { method: 'DELETE' })
      ));
      getData();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="list-footer">
      <div className="info-container">
        <p className="counter">{remainingTasksCount} items left</p>
      </div>
      <div className="button-container">
        <button className="clear-completed" onClick={clearCompleted}>
          Clear Completed
        </button>
      </div>
    </div>
  );
};



export default ListFooter;

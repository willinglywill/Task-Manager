import React, { useContext } from 'react';
import { TaskContextStore } from '../context/TaskContext';
import Task from './Task';

const TaskList = () => {
  const { tasks } = useContext(TaskContextStore);
  return tasks.length > 0 ? (
    tasks.map((task) => <Task key={task.id} task={task} />)
  ) : (
    <div>No Task to show</div>
  );
};

export default TaskList;

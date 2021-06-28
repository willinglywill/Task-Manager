import React, { useContext } from 'react';
import './Task.css';
import { TaskContextStore } from '../context/TaskContext';
const Task = (props) => {
  const { deleteTask, prepareEdit } = useContext(TaskContextStore);
  return (
    <div className='task'>
      <div className='task-title'>{props.task.title}</div>
      <div className='buttons'>
        <button onClick={() => deleteTask(props.task.id)}>
          <i className='fas fa-trash-alt'></i>
        </button>
        <button onClick={() => prepareEdit(props.task.id)}>
          <i className='fas fa-pen-square'></i>
        </button>
      </div>
    </div>
  );
};

export default Task;

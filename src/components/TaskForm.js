import React, { useState, useContext } from 'react';
import './TaskForm.css';
import { TaskContextStore } from '../context/TaskContext';
const TaskForm = () => {
  const { addTask, text, setText, taskToEdit, editTask } =
    useContext(TaskContextStore);

  return (
    <div className='task-form'>
      <input
        className='text-input'
        type='text'
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className='submit-input'
        type='submit'
        value={taskToEdit ? 'Edit' : 'Add'}
        onClick={
          taskToEdit ? () => editTask(text, taskToEdit.id) : () => addTask(text)
        }
      />
    </div>
  );
};

export default TaskForm;

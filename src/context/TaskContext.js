import React, { useState, createContext } from 'react';
import { v4 as uuid } from 'uuid';
export const TaskContextStore = createContext();

export const TastContextProvider = (props) => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');
  const [taskToEdit, setTaskToEdit] = useState('');
  const addTask = (text) => {
    setTasks([...tasks, { title: text, id: uuid() }]);
    setText('');
    console.log(tasks);
  };
  const editTask = (title, id) => {
    const newlyEditedHotTasks = tasks.map((task) =>
      task.id === taskToEdit.id ? { title: text, id: taskToEdit.id } : text
    );
    setTasks(newlyEditedHotTasks);
    setTaskToEdit('');
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  };
  const prepareEdit = (id) => {
    const findTaskToEdit = tasks.find((task) => task.id === id);
    setTaskToEdit(findTaskToEdit);
    setText(findTaskToEdit.title);
  };
  console.log(taskToEdit);

  return (
    <TaskContextStore.Provider
      value={{
        tasks,
        addTask,
        deleteTask,
        text,
        setText,
        prepareEdit,
        taskToEdit,
        setTaskToEdit,
        editTask,
      }}
    >
      {props.children}
    </TaskContextStore.Provider>
  );
};

export default TastContextProvider;

import React from 'react';
import Header from './components/Header';
import './App.css';
import { TastContextProvider } from './context/TaskContext';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
  return (
    <TastContextProvider>
      <div className='app'>
        <Header />
        <TaskForm />
        <TaskList />
      </div>
    </TastContextProvider>
  );
};

export default App;

import React from 'react';
import './App.css';
import { TodoInput, TodoList } from '../Components';

const App = () => {
  return (
    <div className="App">
      <h1>ToDo App</h1>
      <TodoInput />
      <br />
      <TodoList />
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../Redux/actions';

const TodoInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.task.value === '') {
      return false;
    } else {
      dispatch(
        addTodo({
          name: task,
        })
      );
      setTask('');
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <TextField
        type="text"
        id="task"
        placeholder="Create a new todo..."
        value={task}
        onChange={handleChange}
      />
    </form>
  );
};

export default TodoInput;

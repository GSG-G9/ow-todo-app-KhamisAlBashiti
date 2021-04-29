import { ADD } from '../ActionTypes';

const tasks = [
  { id: 1, name: 'Task1' },
  { id: 2, name: 'Task2' },
];

export default (state = tasks, action) => {
  const { type, payload } = action;
  let newTasks;
  switch (type) {
    case ADD:
      newTasks = [...state];
      newTasks.push(payload);
      return newTasks;

    default:
      return state;
  }
};

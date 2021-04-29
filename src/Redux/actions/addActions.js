import { ADD } from '../ActionTypes';

export const addTodo = (task) => ({
  type: ADD,
  payload: task,
});

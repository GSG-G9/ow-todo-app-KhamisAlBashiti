import React from 'react';
import { useSelector } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './style';

const TodoList = () => {
  const classes = useStyles();
  let tasks = useSelector(({ add }) => add);

  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id}  className={classes.root}>
          <ListItemText primary={task.name} />
        </ListItem>
      ))}
    </List>
  );
};

export default TodoList;

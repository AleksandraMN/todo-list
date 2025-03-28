import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../button';
import { useDispatch, useSelector } from 'react-redux';
import { updateTodoAsync } from '../../actions';
import styles from './todo.module.css';

export const Todo = ({ id }) => {
  const dispatch = useDispatch();

  const todo = useSelector((state) =>
    state.todos.todos.find((todo) => todo.id === id)
  );

  if (!todo) return null;

  const { title, completed } = todo;

  const handleSave = (newTitle, id) => {
    if (newTitle.trim() === '') return;
    dispatch(updateTodoAsync({ id, title: newTitle }));
  };

  const onTodoCompletedChange = (newCompleted, id) => {
    dispatch(updateTodoAsync({ id, completed: newCompleted }));
  };

  return (
    <div className={styles.todo}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={completed}
        onChange={({ target }) => onTodoCompletedChange(target.checked, id)}
      />

      <div className={styles.title}>
        {todo.isEditing ? (
          <div className={styles.todoTitle}>
            <input
              type="text"
              value={title}
              onChange={({ target }) => handleSave(target.value, id)}
              className={styles.title}
            />
            <Button onClick={() =>  handleSave(title, id)}>💾</Button>
          </div>
        ) : (
          <Link to={`/task/${id}`} className={styles.todoItem}>
            <div>{title.length > 50 ? `${title.slice(0, 30)}...` : title}</div>
          </Link>
        )}
      </div>
    </div>
  );
};

import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Button} from '../button';
import { readTodos, updateTodo, deleteTodo } from '../../api';
import styles from './task-page.module.css';

export const TaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [todo, setTodo] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    readTodos().then((todos) => {
      const foundTodo = todos.find((todo) => todo.id === parseInt(id));
      if (foundTodo) {
        setTodo(foundTodo);
        setTitle(foundTodo.title);
      } else {
        navigate('/404');
      }
    });
  }, [id, navigate]);

  const handleSave = () => {
		if (title === '') return;
    updateTodo({ id: todo.id, title }).then(() => {
      setIsEditing(false);
      setTodo({ ...todo, title });
    });
  };

  const handleDelete = () => {
    deleteTodo(todo.id).then(() => {
      navigate('/');
    });
  };

  if (!todo) return null;

  return (
    <div className={styles.taskPage}>
      <Button onClick={() => navigate(-1)}>
			←
      </Button>
      <div className={styles.taskContent}>
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.editInput}
          />
        ) : (
          <p className={styles.todoTitle}>{todo.title}</p>
        )}
        <div className={styles.buttons}>
          {isEditing ? (
            <Button onClick={handleSave}>💾</Button>
          ) : (
            <Button onClick={() => setIsEditing(true)}>✎</Button>
          )}
          <Button onClick={handleDelete}>✖</Button>
        </div>
      </div>
    </div>
  );
};

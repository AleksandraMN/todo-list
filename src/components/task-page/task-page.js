import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {Button} from '../button';
import styles from './task-page.module.css';
import { fetchTodoById, updateTodoAsync, deleteTodoAsync } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';


export const TaskPage = () => {
	const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

	const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState('');

	useEffect(() => {
    dispatch(fetchTodoById(id));
  }, [id, dispatch]);

  const todo = useSelector((state) => state.todos.currentTodo);

	useEffect(() => {
		if (todo) {
		  setTitle(todo.title);
	  }
		 if (!id) {
			navigate('/404');
		}
	}, [todo, id, navigate]);

  const handleSave = () => {
    if (title.trim() === '') return;
    dispatch(updateTodoAsync({ id: todo.id, title }))
			.then(() => {
				setIsEditing(false);
			})
			.catch((error) => {
				console.error("Ошибка при обновлении задачи:", error);
			});
  };

  const handleDelete = () => {
    dispatch(deleteTodoAsync(todo.id))
			.then(() => {
				navigate('/');
			})
			.catch((error) => {
				console.error("Ошибка при удалении задачи:", error);
			});
  };

  return (
    <div className={styles.taskPage}>
      <Button onClick={() => {if (title.trim() === '') return; navigate(-1)}}>←</Button>
      <div className={styles.taskContent}>
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.editInput}
          />
        ) : (
          <p className={styles.todoTitle}>{title}</p>
        )}
        <div className={styles.buttons}>
          {isEditing ? (
            <Button onClick={handleSave}>💾</Button>
          ) : (
            <Button onClick={() => { setTitle(title); setIsEditing(true); }}>✎</Button>
          )}
          <Button onClick={handleDelete}>✖</Button>
        </div>
      </div>
    </div>
  );
};


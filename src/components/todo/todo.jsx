import { useContext } from 'react';
import { TodosContext } from '../../context/todos-context';
import { Button } from '../button/button';
import styles from './todo.module.css';

export const Todo = ({ id, title, completed, isEditing }) => {
	const {
		onTodoEdit,
		onTodoTitleChange,
		onTodoCompletedChange,
		onTodoSave,
		onTodoRemove,
	} = useContext(TodosContext);
	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={({ target }) => onTodoCompletedChange(id, target.checked)}
			/>
			<div className={styles.title}>
				{isEditing ? (
					<input
						type="text"
						value={title}
						onChange={({ target }) => onTodoTitleChange(id, target.value)}
					/>
				) : (
					<div onClick={() => onTodoEdit(id)}>{title}</div>
				)}
			</div>
			<div>
				{isEditing ? (
					<Button onClick={() => onTodoSave(id)}>✎</Button>
				) : (
					<Button onClick={() => onTodoRemove(id)}>✖</Button>
				)}
			</div>
		</div>
	);
};

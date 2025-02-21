import { Link } from 'react-router-dom';
import {Button} from '../button';
import styles from './todo.module.css';

export const Todo = ({
	id,
	title,
	completed,
	onCompletedChange,
	isEditing,
	onTitleChange,
	onSave,
}) => {
	return (
		<div className={styles.todo}>
			<input
				className={styles.checkbox}
				type="checkbox"
				checked={completed}
				onChange={({ target }) => onCompletedChange(target.checked)}
			/>
			<div className={styles.title}>
				{isEditing ? (
					<div className={styles.todoTitle}>
						<input
							type="text"
							value={title}
							onChange={({ target }) => onTitleChange(target.value)}
							className={styles.title}
						/>
						<Button onClick={onSave}>💾</Button>
					</div>
				) : (
					<Link
						to={`/task/${id}`}
						className={styles.todoItem}
					>
						<div>{title.length > 50 ? `${title.slice(0, 30)}...` : title}</div>
					</Link>
				)}
			</div>
		</div>
	);
};

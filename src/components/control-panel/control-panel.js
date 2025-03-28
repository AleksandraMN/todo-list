import styles from './control-panel.module.css';
import {Button} from '../button/button';
import {Search, Sorting} from './components';
import { useDispatch } from 'react-redux';
import { createTodoAsync } from '../../actions';
import { useNavigate } from 'react-router-dom';

export const ControlPanel = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

		const onTodoAdd = async () => {
			const newTodo = await dispatch(createTodoAsync({ title: '', completed: false}));
			let id = newTodo.id;
			navigate(`/task/${id}`);
		};

	return (
		<div className={styles.controlPanel}>
			<Search  />
			<Sorting  />
			<Button onClick={onTodoAdd}>
				✚
			</Button>
		</div>
	);
};

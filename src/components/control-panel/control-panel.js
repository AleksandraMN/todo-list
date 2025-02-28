import styles from './control-panel.module.css';
import {Button} from '../button/button';
import {Search, Sorting} from './components';
import { useContext } from 'react';
import { TodosContext } from '../../context/todos-context';

export const ControlPanel = () => {
	const {onTodoAdd} = useContext(TodosContext);

	return (
		<div className={styles.controlPanel}>
			<Search />
			<Sorting />
			<Button  onClick={onTodoAdd}>
				✚
			</Button>
		</div>
	);
};

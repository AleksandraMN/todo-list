import { useContext, useEffect} from 'react';
import { Todo } from './components/todo';
import { ControlPanel } from './components/control-panel';
import { readTodos } from './api';
import styles from './app.module.css';
import { TodosContext } from './context/todos-context';
import { FilterContext } from './context/filter-context';


export const App = () => {
	const {todos, setTodos} = useContext(TodosContext);
	const {searchPhrase, isAlphabetSorting} = useContext(FilterContext);

	useEffect(() => {
		readTodos(searchPhrase, isAlphabetSorting).then((loadedTodos) =>
			setTodos(loadedTodos.reverse()),
		);
	}, [searchPhrase, isAlphabetSorting, setTodos]);


	return (
		<div className={styles.app}>
			<ControlPanel />
			{todos.map(({ id, title, completed, isEditing = false }) => (
				<Todo
					key={id}
					id={id}
					title={title}
					completed={completed}
					isEditing={isEditing}
				/>
			))}
		</div>
	);
};

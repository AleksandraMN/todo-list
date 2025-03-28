import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from '../../actions';
import { ControlPanel} from '../control-panel';
import { Todo } from '../todo';
import styles from './main-page.module.css';

export const MainPage = () => {
	const dispatch = useDispatch();
	const todos = useSelector((state) => state.todos.todos);
	const searchPhrase =  useSelector((state) => state.filters.searchPhrase);
	const isAlphabetSorting = useSelector((state) => state.filters.isAlphabetSorting);
	
  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch, searchPhrase, isAlphabetSorting]);

  return (
    <div className={styles.app}>
      <ControlPanel />
      <div className={styles.todo}>
        {Array.isArray(todos) && todos.map(({ id }) => (
          <Todo key={id} id={id} />
        ))}
      </div>
    </div>
  );
};

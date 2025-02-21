import styles from './search.module.css';
import {debounce} from './utils';
import { useState, useRef} from 'react';

export const Search = ({onSearch}) => {
	const [value, setValue] = useState('');

	const debouncedOnSearch = useRef(debounce(onSearch, 1500)).current;


	const onChange = ({target}) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		onSearch(value);
	};

	return (
		<form className={styles.search} onSubmit={onSubmit}>
			<input
				className={styles.input}
				type="text"
				value={value}
				placeholder="Поиск..."
				onChange={onChange}
			/>

		</form>
	);
};

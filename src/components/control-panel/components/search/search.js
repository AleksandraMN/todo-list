import { FilterContext } from '../../../../context/filter-context';
import styles from './search.module.css';
import {debounce} from './utils';
import { useState, useRef, useContext } from 'react';

export const Search = () => {
	const [value, setValue] = useState('');
	const {setSearchPhrase} = useContext(FilterContext);

	const debouncedOnSearch = useRef(debounce(setSearchPhrase, 1500)).current;

	const onChange = ({target}) => {
		setValue(target.value);
		debouncedOnSearch(target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		setSearchPhrase(value);
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

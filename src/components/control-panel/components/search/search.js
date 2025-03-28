import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { debounce } from './utils';
import { setSearchPhrase } from '../../../../actions';
import styles from './search.module.css';

export const Search = () => {
  const dispatch = useDispatch();

  // Получаем текущую поисковую фразу из Redux
  const searchPhrase = useSelector((state) => state.filters.searchPhrase);
	
  // Создаем дебаунсированный вызов экшена
  const debouncedSetSearchPhrase = useRef(debounce((value) => dispatch(setSearchPhrase(value)), 1500)).current;

  // Обработчик изменения значения в поле поиска
  const onChange = ({ target }) => {
    const value = target.value;
    dispatch(setSearchPhrase(value)); // Устанавливаем текущее значение в Redux
    debouncedSetSearchPhrase(value); // Дебаунсированный вызов для триггера поиска
  };

  // Обработчик отправки формы
  const onSubmit = (e) => {
    e.preventDefault();
    if (searchPhrase) { // Проверка на не пустую строку
      dispatch(setSearchPhrase(searchPhrase)); // Принудительно триггерим поиск
    }
  };

  return (
    <form className={styles.search} onSubmit={onSubmit}>
      <input
        className={styles.input}
        type="text"
        value={searchPhrase}
        placeholder="Поиск..."
        onChange={onChange}
      />
    </form>
  );
};

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '../../../button';
import { setAlphabetSorting } from '../../../../actions';
import styles from './sorting.module.css';

export const Sorting = () => {
  const dispatch = useDispatch();

  // Получаем текущее состояние сортировки из Redux
  const isAlphabetSorting = useSelector((state) => state.filters.isAlphabetSorting);

  // Обработчик изменения чекбокса
  const onChange = ({ target }) => {
    const isChecked = target.checked;
    dispatch(setAlphabetSorting(isChecked)); // Обновляем состояние сортировки в Redux
  };

  return (
    <Button>
      <input
        className={styles.checkbox}
        id="sorting-button"
        type="checkbox"
        checked={isAlphabetSorting}
        onChange={onChange}
      />
      <label className={styles.label} htmlFor="sorting-button">
        A&darr;
      </label>
    </Button>
  );
};

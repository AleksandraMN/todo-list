import { Link } from 'react-router-dom';
import styles from './not-found-page.module.css';

export const NotFoundPage = () => {
  return (
    <div className={styles.notFoundPage}>
      <h1>404 — Страница не найдена</h1>
      <Link to="/" className={styles.homeLink}>
        Вернуться на главную
      </Link>
    </div>
  );
};

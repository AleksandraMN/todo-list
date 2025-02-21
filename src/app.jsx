import { Routes, Route, Navigate } from 'react-router-dom';
import { MainPage } from './components/main-page';
import { TaskPage } from './components/task-page';
import { NotFoundPage } from './components/not-found-page';

export const App = () => {
	return (
		<Routes>
		  <Route path="/" element={<MainPage />} />
		  <Route path="/task/:id" element={<TaskPage />} />
		  <Route path="/404" element={<NotFoundPage />} />
		  <Route path="*" element={<Navigate to="/404" />} />
	  </Routes>
	);
};

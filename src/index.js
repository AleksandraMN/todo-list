import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './app.jsx';
import { TodosProvider } from './context/todos-context.js';
import { FilterProvider } from './context/filter-context.js';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
		<TodosProvider>
			<FilterProvider>
				<App />
			</FilterProvider>
		</TodosProvider>
  </React.StrictMode>
);



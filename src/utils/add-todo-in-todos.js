import { NEW_TODO_ID } from '../const';

export const addTodoInTodos = (todos, todo) => {
	const newTodo = todo || {
		id: NEW_TODO_ID,
		title: '',
		completed: false,
		isEditing: true,
	};
	return [newTodo, ...todos];
};

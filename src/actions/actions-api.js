
import { createTodo, readTodos, updateTodo, deleteTodo } from '../api';
import {
  setTodos,
  addTodo as addTodoAction,
  updateTodo as updateTodoAction,
  deleteTodo as deleteTodoAction,
	setTodo,
	clearTodo,
} from './actions-todos';

export const fetchTodos = () => async (dispatch, getState) => {
  const { filters } = getState();
  const { searchPhrase, isAlphabetSorting } = filters;

  const todos = await readTodos(searchPhrase, isAlphabetSorting);
  dispatch(setTodos(todos));
};

export const createTodoAsync = (newTodo) => async (dispatch) => {
  const todo = await createTodo(newTodo);
  dispatch(addTodoAction(todo));
	return todo;
};

export const updateTodoAsync = (todoData) => async (dispatch) => {
  const updatedTodo = await updateTodo(todoData);
  dispatch(updateTodoAction(updatedTodo));
};

export const deleteTodoAsync = (id) => async (dispatch) => {
  await deleteTodo(id);
  dispatch(deleteTodoAction(id));
};

// Получение одной задачи по ID
export const fetchTodoById = (id) => async (dispatch) => {
  const todos = await readTodos();
  const foundTodo = todos.find((todo) => todo.id === parseInt(id));
  if (foundTodo) {
    dispatch(setTodo(foundTodo));
  } else {
    dispatch(clearTodo());
  }
	return foundTodo;
};



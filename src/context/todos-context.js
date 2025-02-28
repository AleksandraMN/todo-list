import { createContext, useState } from "react";
import { addTodoInTodos, findTodo, removeTodoInTodos, setTodoInTodos } from "../utils";
import { NEW_TODO_ID } from "../const";
import { createTodo, deleteTodo, updateTodo } from "../api";
import PropTypes from "prop-types";

export const TodosContext = createContext({});


export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const onTodoAdd = () => {
    setTodos(addTodoInTodos(todos));
  };

	const onTodoSave = (todoId) => {
		const { title, completed } = findTodo(todos, todoId) || {};

		if (todoId === NEW_TODO_ID) {
			createTodo({ title, completed }).then((todo) => {
				let updatedTodos = setTodoInTodos(todos, { id: NEW_TODO_ID, isEditing: false });
				updatedTodos = removeTodoInTodos(updatedTodos, NEW_TODO_ID);
				updatedTodos = addTodoInTodos(updatedTodos, todo);
				setTodos(updatedTodos);
			});
		} else {
			updateTodo({ id: todoId, title }).then(() => {
				setTodos(setTodoInTodos(todos, { id: todoId, isEditing: false }));
			});
		}
	};

	const onTodoTitleChange = (id, newTitle) => {
		setTodos(setTodoInTodos(todos, { id, title: newTitle }));
	};

	const onTodoCompletedChange = (id, newCompleted) => {
		updateTodo({ id, completed: newCompleted }).then(() => {
			setTodos(setTodoInTodos(todos, { id, completed: newCompleted }));
		});
	};

	const onTodoEdit = (id) => {
		setTodos(setTodoInTodos(todos, { id, isEditing: true }));
	};

	const onTodoRemove = (id) => {
		deleteTodo(id).then(() => setTodos(removeTodoInTodos(todos, id)));
	};

  return (
    <TodosContext.Provider
      value={{
        todos,
				setTodos,
        onTodoAdd,
        onTodoSave,
        onTodoTitleChange,
        onTodoCompletedChange,
        onTodoEdit,
        onTodoRemove,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

TodosProvider.propTypes = {
	children: PropTypes.node.isRequired,
};



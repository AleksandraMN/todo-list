const initialState = {
  todos: [],
  currentTodo: null, // Для хранения текущей задачи
};

export const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_TODOS':
      return { ...state, todos: action.payload };
    case 'ADD_TODO':
      return { ...state, todos: [...state.todos, action.payload] };
    case 'UPDATE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id ? { ...todo, ...action.payload } : todo
        ),
      };
    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'SET_TODO':
      return { ...state, currentTodo: action.payload }; // Устанавливаем текущую задачу
    case 'CLEAR_TODO':
      return { ...state, currentTodo: null }; // Очищаем текущую задачу
    default:
      return state;
  }
};

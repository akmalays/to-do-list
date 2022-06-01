const initialState = { listTodo: [] };

const todoReducer = (state = initialState, action) => {
  let newTodos;
  if (action.type === "SET_LIST_TODO") {
    return {
      ...state,
      listTodo: action.payload,
    };
  } else if (action.type === "ADD_LIST_TODO") {
    newTodos = state.listTodo;
    newTodos.push(action.payload);
    return {
      ...state,
      listTodo: newTodos,
    };
  }
  return state;
};

export default todoReducer;

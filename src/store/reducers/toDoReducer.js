const initialState = { listTodo: [] };

const todoReducer = (state = initialState, action) => {
  if (action.type === "SET_LIST_TODO") {
    return {
      ...state,
      listTodo: action.payload,
    };
  }
  return state;
};

export default todoReducer;

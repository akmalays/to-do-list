import axios from "axios";

const baseUrl =
  "https://virtserver.swaggerhub.com/hanabyan/todo/1.0.0/to-do-list";

export const getDefaultListToDo = () => {
  return (dispatch) => {
    axios
      .get(baseUrl)
      .then((response) => {
        dispatch(setListTodo(response.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const addTodo = (objectData) => {
  return (dispatch, getState) => {
    const listTodo = getState().todoReducer.listTodo;
    console.warn("cek existing list", listTodo);
    listTodo.push(objectData);
    dispatch(addListTodo(listTodo));
    // setListTodo(newList);
  };
};

export const addListTodo = (payload) => {
  return {
    type: "ADD_LIST_TODO",
    payload,
  };
};

export const setListTodo = (payload) => {
  return {
    type: "SET_LIST_TODO",
    payload,
  };
};

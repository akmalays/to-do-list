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
    let listTodo = getState().todoReducer.listTodo;
    listTodo.push(objectData);
    dispatch(setListTodo(listTodo));
  };
};

export const deleteTodo = (id) => {
  return (dispatch, getState) => {
    let listTodo = getState().todoReducer.listTodo;
    listTodo.forEach((todo, index) => {
      if (todo.id === id) {
        listTodo.splice(index, 1);
      }
    });
    dispatch(setListTodo(listTodo));
  };
};

export const changeStatusTodo = (id, status) => {
  return (dispatch, getState) => {
    let listTodo = getState().todoReducer.listTodo;
    listTodo.forEach((listItem) => {
      if (listItem.id === id) {
        listItem.status = status;
      }
    });
    dispatch(setListTodo(listTodo));
  };
};

export const updateTodo = (id, dataUpdate) => {
  return (dispatch, getState) => {
    let listTodo = getState().todoReducer.listTodo;
    listTodo.forEach((listItem) => {
      if (listItem.id === id) {
        listItem.status = parseInt(dataUpdate.status);
        listItem.title = dataUpdate.title;
        listItem.description = dataUpdate.description;
        listItem.createdAt = dataUpdate.createdAt;
      }
    });
    dispatch(setListTodo(listTodo));
  };
};

export const setListTodo = (payload) => {
  return {
    type: "SET_LIST_TODO",
    payload,
  };
};

import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./TodosTypes";

export const addToDo = (data) => {
  return {
    type: ADD_TODO,
    payload: {
      id: new Date().getTime().toString(),
      data: data,
    },
  };
};

export const deleteToDo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const UpdateToDo = (id, data) => {
  return {
    type: UPDATE_TODO,
    payload: {
      // id : new Date().getTime().toString(),
      data,
      id,
    },
  };
};

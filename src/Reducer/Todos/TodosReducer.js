import { ADD_TODO, DELETE_TODO, UPDATE_TODO } from "./TodosTypes";

const initialState = {
  list: [],
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      const { id, data } = action.payload;
      return {
        ...state,
        list: [
          ...state.list,
          {
            id: id,
            data: data,
          },
        ],
      };

    case DELETE_TODO:
      const newList = state.list.filter((element) => element.id !== action.id);
      return {
        ...state,
        list: newList,
      };

    case UPDATE_TODO:
      const updatedData = state.list.map((item) => {
        if (item.id === action.payload.id) item.data = action.payload.data;
        return item;
      });
      return {
        ...state,
        list: updatedData,
      };

    default:
      return state;
  }
};

export default TodosReducer;

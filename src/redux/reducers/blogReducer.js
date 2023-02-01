import { ADD_BLOG } from "../actionTypes/actionTypes";

const initialState = {
  title: "",
  description: "",
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BLOG:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    default:
      return state;
  }
};

export default blogReducer;

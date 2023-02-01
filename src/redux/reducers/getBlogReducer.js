import { ADD_BLOG, FETCHING_ERROR, FETCHING_START, FETCHING_SUCCESS } from "../actionTypes/actionTypes";

const initialState = {
  loading: false,
  blogs: [],
  error: false,
};

const getBlogReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_START:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        blogs: action.payload,
        error: false,
      };
    case FETCHING_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    default:
      return state;
  }
};

export default getBlogReducer;

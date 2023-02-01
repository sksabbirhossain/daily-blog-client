import { combineReducers } from "redux";
import blogReducer from "./blogReducer";
import getBlogReducer from "./getBlogReducer";

const rootReducer = combineReducers({
  addBlog: blogReducer,
  allBlog: getBlogReducer,
});

export default rootReducer;

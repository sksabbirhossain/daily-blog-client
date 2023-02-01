import { composeWithDevTools } from "@redux-devtools/extension";
import { createStore } from "redux";
import rootReducer from "./reducers/routeReducer";

const store = createStore(rootReducer, composeWithDevTools());

export default store;

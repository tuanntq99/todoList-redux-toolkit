// import { createStore } from "redux";
// import rootReducer from "./reducer";
// import { composeWithDevTools } from "redux-devtools-extension";

// const composedEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composedEnhancers);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filtersSlice from "../components/Filters/filtersSlice";
import todosSlice from "../components/TodoList/todosSlice";

const store = configureStore({
  // đã tích hợp redux-devtools-extension
  reducer: {
    filters: filtersSlice.reducer, // lấy dữ liệu reducer
    todoList: todosSlice.reducer,
  },
});

export default store;

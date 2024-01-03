import { configureStore } from "@reduxjs/toolkit";
import {
  tasksReducer,
  addTask,
  removeTask,
  setTaskValue,
  toggleTask,
} from "./slices/tasksSlice";

import {
  visibilityFilterReducer,
  setVisibilityFilter,
} from "./slices/visibilityFilterSlice";

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    visibilityFilter: visibilityFilterReducer,
  },
});

export { store };
export { toggleTask, removeTask, addTask, setTaskValue, setVisibilityFilter };

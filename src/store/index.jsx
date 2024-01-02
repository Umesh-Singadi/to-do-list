import { createSlice, configureStore } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    taskValue: "Hello",
    list: [
      { id: 1, text: "Umesh", completed: false },
      { id: 2, text: "Ajit", completed: false },
      { id: 3, text: "Niranjan", completed: false },
    ],
  },
  reducers: {
    setTaskValue(state, action) {
      state.taskValue = action.payload;
    },
    addTask(state, action) {
      state.list.push({
        id: Date.now(),
        text: action.payload,

        competed: false,
      });
    },
    toggleTask(state, action) {
      const task = state.list.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

const store = configureStore({
  reducer: {
    tasks: tasksSlice.reducer,
  },
});

export { store };
export const { toggleTask } = tasksSlice.actions;

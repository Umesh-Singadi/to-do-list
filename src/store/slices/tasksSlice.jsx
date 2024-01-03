import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",
  initialState: {
    taskValue: "",
    list: [
      { id: 1, text: "YOGA", completed: false },
      { id: 2, text: "Stuti Chanting", completed: false },
      { id: 3, text: "Cocking", completed: false },
    ],
  },
  reducers: {
    setTaskValue(state, action) {
      state.taskValue = action.payload;
    },
    removeTask(state, action) {
      state.list = state.list.filter((task) => task.id !== action.payload);
    },
    addTask(state) {
      state.list.push({
        id: Date.now(),
        text: state.taskValue,
        competed: false,
      }),
        (state.taskValue = "");
    },
    toggleTask(state, action) {
      const task = state.list.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { toggleTask, removeTask, addTask, setTaskValue } =
  tasksSlice.actions;

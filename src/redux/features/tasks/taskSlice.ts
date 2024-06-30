import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Main } from "../../../types";

export interface TaskState {
  tasks: Main.Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<Main.Task>) {
      state.tasks.push(action.payload);
    },
    removeTask(state, action: PayloadAction<string>) {
      state.tasks = state.tasks.filter(
        (task: Main.Task) => task.id !== action.payload
      );
    },
    updateTask(state, action: PayloadAction<Main.Task>) {
      const { id, title, priority } = action.payload;
      const task = state.tasks.find((task: Main.Task) => task.id === id);
      if (task) {
        if (title) task.title = title;
        if (priority) task.priority = priority;
      }
    },
    setTasks(state, action: PayloadAction<Main.Task[]>) {
      state.tasks = action.payload;
    },
  },
});

export const { addTask, removeTask, updateTask, setTasks } = taskSlice.actions;
export default taskSlice.reducer;

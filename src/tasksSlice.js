// src/tasksSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import tasks from './data/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetchTasks', async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(tasks);
    }, 1000); // Имитация задержки
  });
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: { tasks: [], loading: false, },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.loading = false;
        state.tasks = action.payload;
      });
  },
});

export default tasksSlice.reducer;
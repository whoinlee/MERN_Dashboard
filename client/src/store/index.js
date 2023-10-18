import { configureStore } from '@reduxjs/toolkit';
import globalReducer from '../state/globalSlice';

export const store = configureStore({
  reducer: {
    global: globalReducer,
  },
});
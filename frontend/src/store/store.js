import { configureStore } from '@reduxjs/toolkit';
import files from './slices/ToolBoxReducer'

export default configureStore({
  reducer: {
    files
  },
});
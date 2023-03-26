import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/authSlice'
import metricReducer from '../features/metricSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    metric: metricReducer,
  },
});

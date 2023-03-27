import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllStocks,
  getStockBySymbol,
  addStock,
  updateStock,
  deleteStock,
  getMetricsBySymbol,
} from './metricService';

const initialState = {
  metrics: null,
  status: 'idle',
  error: null,
};

export const fetchMetrics = createAsyncThunk('metrics/fetchMetrics', async (symbol) => {
  const response = await getMetricsBySymbol(symbol);
  return response;
});

export const addStockAction = createAsyncThunk('metrics/addStock', async (stock, { getState }) => {
  const token = getState().auth.user.token;
  const response = await addStock(stock, token);

  return response;
});

export const updateStockAction = createAsyncThunk(
  'metrics/updateStock',
  async ({ symbol, stock }, { getState }) => {
    const token = getState().auth.user.token;
    const response = await updateStock(symbol, stock, token);
    return response;
  }
);

export const deleteStockAction = createAsyncThunk('metrics/deleteStock', async (symbol, { getState }) => {
  const token = getState().auth.user.token;
  const response = await deleteStock(symbol, token);
  return response;
});

export const getAllStocksAction = createAsyncThunk('metrics/getAllStocks', async (_, { getState }) => {
  const token = getState().auth.user.token;
  const response = await getAllStocks(token);
  return response;
});

export const getStockBySymbolAction = createAsyncThunk(
  'metrics/getStockBySymbol',
  async (symbol, { getState }) => {
    const token = getState().auth.user.token;
    const response = await getStockBySymbol(symbol, token);
    return response;
  }
);


export const metricSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMetrics.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchMetrics.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.metrics = action.payload;
      })
      .addCase(fetchMetrics.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addStockAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addStockAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.metrics = action.payload;
      })
      .addCase(addStockAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(updateStockAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateStockAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.metrics = action.payload;
      })
      .addCase(updateStockAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(deleteStockAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteStockAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.metrics = action.payload;
      })
      .addCase(deleteStockAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getAllStocksAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getAllStocksAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.metrics = action.payload;
      })
      .addCase(getAllStocksAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(getStockBySymbolAction.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getStockBySymbolAction.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.metrics = action.payload;
      })
      .addCase(getStockBySymbolAction.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export default metricSlice.reducer;

export const selectMetrics = (state) => state.metrics.metrics;
export const selectMetricsStatus = (state) => state.metrics.status;
export const selectMetricsError = (state) => state.metrics.error;

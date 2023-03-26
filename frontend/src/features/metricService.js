import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

// Get all stocks
export const getAllStocks = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/stocks`, config);
  return response.data;
};

// Get stock by symbol
export const getStockBySymbol = async (symbol, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/stocks/${symbol}`, config);
  return response.data;
};

// Add a stock
export const addStock = async (stock, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(`${API_URL}/stocks`, stock, config);
  return response.data;
};

// Update a stock
export const updateStock = async (symbol, stock, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.put(`${API_URL}/stocks/${symbol}`, stock, config);
  return response.data;
};

// Delete a stock
export const deleteStock = async (symbol, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.delete(`${API_URL}/stocks/${symbol}`, config);
  return response.data;
};

// Get metrics by symbol
export const getMetricsBySymbol = async (symbol, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${API_URL}/stocks/${symbol}/metrics`, config);
  return response.data;
};

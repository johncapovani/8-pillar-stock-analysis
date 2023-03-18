const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getStocks,
  getStockBySymbol,
  addStock,
  updateStockBySymbol,
  deleteStockBySymbol,
  getStockMetrics,
  getStockTargetPrice,
} = require('../controllers/stockController');

// Get all stocks
router.get('/stocks', getStocks);

// Get a specific stock by symbol
router.get('/stocks/:symbol', getStockBySymbol);

// Add a new stock
router.post('/stocks', protect, addStock);

// Update a stock by symbol
router.put('/stocks/:symbol', protect, updateStockBySymbol);

// Delete a stock by symbol
router.delete('/stocks/:symbol', protect, deleteStockBySymbol);

// Get 8 pillar metrics for a stock by symbol
router.get('/stocks/:symbol/metrics', getStockMetrics);

// Calculate target price for a stock by symbol
router.get('/stocks/:symbol/targetprice', getStockTargetPrice);

module.exports = router;

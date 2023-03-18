const Stock = require('../models/Stock');

// Get all stocks
exports.getStocks = async (req, res, next) => {
  try {
    const stocks = await Stock.find();
    res.json(stocks);
  } catch (err) {
    next(err);
  }
};

// Get a specific stock by symbol
exports.getStockBySymbol = async (req, res, next) => {
  const { symbol } = req.params;
  try {
    const stock = await Stock.findOne({ symbol });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.json(stock);
  } catch (err) {
    next(err);
  }
};

// Add a new stock
exports.addStock = async (req, res, next) => {
  const { symbol, name, sector } = req.body;
  try {
    const stock = new Stock({ symbol, name, sector });
    await stock.save();
    res.status(201).json(stock);
  } catch (err) {
    next(err);
  }
};

// Update a stock by symbol
exports.updateStockBySymbol = async (req, res, next) => {
  const { symbol } = req.params;
  const { name, sector } = req.body;
  try {
    const stock = await Stock.findOneAndUpdate({ symbol }, { name, sector }, { new: true });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.json(stock);
  } catch (err) {
    next(err);
  }
};

// Delete a stock by symbol
exports.deleteStockBySymbol = async (req, res, next) => {
  const { symbol } = req.params;
  try {
    const stock = await Stock.findOneAndDelete({ symbol });
    if (!stock) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.json(stock);
  } catch (err) {
    next(err);
  }
};

// Get 8 pillar metrics for a stock by symbol
exports.getStockMetrics = async (req, res, next) => {
  const { symbol } = req.params;
  try {
    // Fetch the stock data and calculate the 8 pillar metrics
    // ...
    res.json(metrics);
  } catch (err) {
    next(err);
  }
};

// Calculate target price for a stock by symbol
exports.getStockTargetPrice = async (req, res, next) => {
  const { symbol } = req.params;
  try {
    // Fetch the stock data and calculate the target price
    // ...
    res.json({ targetPrice });
  } catch (err) {
    next(err);
  }
};

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStocksAction, addStockAction } from '../features/metricSlice';
import '../pages_css/Watchlist.css'
const Watchlist = () => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState('');
  const [sector, setSector] = useState('');
  const stocks = useSelector((state) => state.metrics);

  useEffect(() => {
    dispatch(getAllStocksAction());
  }, [dispatch]);

  const handleAddStock = (event) => {
    event.preventDefault();
    dispatch(addStockAction({ symbol, sector }));
    setSymbol('');
    setSector('');
  };

  return (
    <div className="watchlist-container">
      <h1>My Watchlist</h1>
      <form onSubmit={handleAddStock}>
        <div className="form-group">
          <label htmlFor="symbol">Symbol:</label>
          <input
            type="text"
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="sector">Sector:</label>
          <select id="sector" value={sector} onChange={(e) => setSector(e.target.value)}>
            <option value="">Select a sector</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Finance">Finance</option>
            <option value="Energy">Energy</option>
            <option value="Consumer Goods">Consumer Goods</option>
            <option value="Communication Services">Communication Services</option>
            <option value="Industrials">Industrials</option>
            <option value="Materials">Materials</option>
          </select>
        </div>
        <button type="submit">Add Stock</button>
      </form>
      <div className="stock-list">
        {stocks &&
          stocks.map((stock) => (
            <div className="stock-item" key={stock._id}>
              <p className="stock-symbol">Symbol: {stock.symbol}</p>
              <p className="stock-name">Name: {stock.name}</p>
              <p className="stock-sector">Sector: {stock.sector}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Watchlist;

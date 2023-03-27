import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllStocksAction, addStockAction } from '../features/metricSlice';
import '../pages_css/Watchlist.css'

const Watchlist = () => {
  const dispatch = useDispatch();
  const [symbol, setSymbol] = useState('');
  const [name, setName] = useState('');
  const [sector, setSector] = useState('');
  const stocks = useSelector((state) => state.metric.metrics);

  useEffect(() => {
    dispatch(getAllStocksAction());
  }, [dispatch]);

  const handleAddStock = (event) => {
    event.preventDefault();
    dispatch(addStockAction({ symbol, name, sector }));
    setSymbol('');
    setName('');
    setSector('');
  };

  return (
    <div className="watchlist-container">
      <h1>Add a stock to your watchlist:</h1>
      <form className="watchlist-form" onSubmit={handleAddStock}>
        <div className="watchlist-form-group">
          <label htmlFor="symbol">Symbol:</label>
          <input
            className="watchlist-form-input"
            type="text"
            id="symbol"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
          />
        </div>
        <div className="watchlist-form-group">
          <label htmlFor="name">Name:</label>
          <input
            className="watchlist-form-input"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="watchlist-form-group">
          <label htmlFor="sector">Sector:</label>
          <select className="watchlist-form-select" id="sector" value={sector} onChange={(e) => setSector(e.target.value)}>
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
        <button className="watchlist-form-button" type="submit">Add Stock</button>
      </form>
      <h2>My Watchlist</h2>
      <div className="stock-list">
        {stocks &&
          stocks.map((stock) => (
            <Link to={`/eightpillars/${stock.symbol}`} key={stock._id}>
              <div className="stock-item">
                <p className="stock-symbol">Symbol: {stock.symbol}</p>
                <p className="stock-name">Name: {stock.name}</p>
                <p className="stock-sector">Sector: {stock.sector}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Watchlist;

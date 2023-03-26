import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllStocksAction, addStockAction } from '../features/metricSlice';

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
    <div>
      <h1>My Watchlist</h1>
      <form onSubmit={handleAddStock}>
        <label>
          Symbol:
          <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        </label>
        <label>
          Sector:
          <select value={sector} onChange={(e) => setSector(e.target.value)}>
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
        </label>
        <button type="submit">Add Stock</button>
      </form>
      {stocks && stocks.map((stock) => (
        <div key={stock._id}>
          <p>Symbol: {stock.symbol}</p>
          <p>Name: {stock.name}</p>
          <p>Sector: {stock.sector}</p>
        </div>
      ))}
    </div>
  );
};

export default Watchlist;

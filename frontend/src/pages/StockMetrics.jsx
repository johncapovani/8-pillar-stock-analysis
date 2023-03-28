import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { getMetricsBySymbol } from '../features/metricService';
import '../pages_css/StockMetrics.css';
import PillarDescriptions from '../components/PillarDescriptions'

const StockMetrics = () => {
  const [symbol, setSymbol] = useState('');
  const [metrics, setMetrics] = useState(null);
  const token = useSelector((state) => state.auth.user.token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await getMetricsBySymbol(symbol, token);
      console.log(data)
      setMetrics(data);
    } catch (error) {
      console.log(error);
    }
  };

  const getMetricText = (value, grade) => {
    return `${value} (${grade})`;
  };

  const getHighlightClass = (grade) => {
    switch (grade) {
      case 'Excellent':
        return 'highlight-excellent';
      case 'Good':
        return 'highlight-good';
      case 'Bad':
        return 'highlight-bad';
      default:
        return '';
    }
  };

  const getStockName = () => {
    if (!metrics) {
      return 'Analyze a stock using the 8-pillars Analysis Approach';
    }

    return `${metrics.info.Name} Analysis`;
  };

  return (
    <div className="stock-metrics">
      <h1>{getStockName()}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter stock symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
        />
        <button type="submit">Get Metrics</button>
      </form>
      {metrics && (
        <div className="stock-metrics-container">
          <div className="stock-summary">
            <div className="stock-summary-item">
              <h2>{metrics.info.Name} ({metrics.info.Symbol})</h2>
              <p>{metrics.info.Description}</p>
            </div>
            <div className="stock-summary-item">
              <h3>Target Price by Analyst</h3>
              <p>{metrics.info.AnalystTargetPrice}</p>
            </div>
            <div className="stock-summary-item">
              <h3>Market Cap</h3>
              <p>{metrics.info.MarketCapitalization.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
            </div>
            <div className="stock-summary-item">
              <h3>P/E Ratio</h3>
              <p>{metrics.info.PERatio}</p>
            </div>
            <div className="stock-summary-item">
              <h3>P/S Ratio</h3>
              <p>{metrics.info.PriceToSalesRatioTTM}</p>
            </div>
            <div className="stock-summary-item">
              <h3>52 Week High</h3>
              <p>{metrics.info["52WeekHigh"]}</p>
            </div>
            <div className="stock-summary-item">
              <h3>52 Week Low</h3>
              <p>{metrics.info["52WeekLow"]}</p>
            </div>
            <div className="stock-summary-item">
              <h3>200 Day Moving Average</h3>
              <p>{metrics.info["200DayMovingAverage"]}</p>
            </div>
            <div className="stock-summary-item">
              <h3>50 Day Moving Average</h3>
              <p>{metrics.info["50DayMovingAverage"]}</p>
            </div>
            <div className="stock-summary-item">
              <h3>Book Value</h3>
              <p>{metrics.info.BookValue}</p>
            </div>
            <div className="stock-summary-item">
              <h3>Beta</h3>
              <p>{metrics.info.Beta}</p>
            </div>
          </div>
          <div className="metrics-list">
            <div className="legend-section">
              <h3 className='pillarheading'>8 Pillar Analysis Results:</h3>
            <div className="legend">
              <div className="legend-item">
                <div className="legend-excellent"></div>
                <p>Excellent</p>
              </div>
              <div className="legend-item">
                <div className="legend-good"></div>
                <p>Good</p>
              </div>
              <div className="legend-item">
                <div className="legend-bad"></div>
                <p>Bad</p>
              </div>
              </div>
            </div>
            <div className="metric-item">
              <h3>EPS</h3>
              <p className={`metric-grade ${getHighlightClass(metrics.earningsPerShare.grade)}`}>
                {getMetricText(metrics.earningsPerShare.value, metrics.earningsPerShare.grade)}
              </p>
            </div>
            <div className="metric-item">
              <h3>ROE</h3>
              <p className={`metric-grade ${getHighlightClass(metrics.returnOnEquity.grade)}`}>
                {getMetricText(metrics.returnOnEquity.value, metrics.returnOnEquity.grade)}
              </p>
            </div>
            <div className="metric-item">
              <h3>Net Profit Margin</h3>
              <p className={`metric-grade ${getHighlightClass(metrics.netProfitMargin.grade)}`}>
                {getMetricText(metrics.netProfitMargin.value, metrics.netProfitMargin.grade)}
              </p>
            </div>
            <div className="metric-item">
              <h3>Dividend Yield</h3>
              <p className={`metric-grade ${getHighlightClass(metrics.dividendYield.grade)}`}>
                {getMetricText(metrics.dividendYield.value, metrics.dividendYield.grade)}
              </p>
            </div>
            <div className="metric-item">
              <h3>Debt to Equity Ratio</h3>
              <p className={`metric-grade ${getHighlightClass(metrics.debtToEquityRatio.grade)}`}>
                {getMetricText(metrics.debtToEquityRatio.value, metrics.debtToEquityRatio.grade)}
              </p>
            </div>
            <div className="metric-item">
              <h3>Current Ratio</h3>
              <p className={`metric-grade ${getHighlightClass(metrics.currentRatio.grade)}`}>
                {getMetricText(metrics.currentRatio.value, metrics.currentRatio.grade)}
              </p>
            </div>
            <div className="metric-item">
              <h3>Price to Book Ratio</h3>
              <p className={`metric-grade ${getHighlightClass(metrics.priceToBookRatio.grade)}`}>
                {getMetricText(metrics.priceToBookRatio.value, metrics.priceToBookRatio.grade)}
              </p>
            </div>
          </div>
        </div>
      )}
      <PillarDescriptions />
    </div>
    
  );
};

export default StockMetrics;

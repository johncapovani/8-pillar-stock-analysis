const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const apiKey = process.env.ALPHA_ADVANTAGE_KEY; // Replace with your API key
const symbol = "AAPL"; // Replace with the stock symbol you want to analyze

// Function to retrieve the stock data from AlphaAdvantage API
async function getStockData() {
  const response = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${apiKey}`);
  const data = response.data;
  return data;
}

// Function to calculate the required metrics for 8 pillar stock analysis
async function calculateMetrics() {
  const stockData = await getStockData();
  console.log(stockData)
  const currentPrice = parseFloat(stockData["PriceToSalesRatioTTM"]); // Price-to-Sales ratio
  const eps = parseFloat(stockData["EPS"]); // Earnings Per Share
  const roe = parseFloat(stockData["ReturnOnEquityTTM"]); // Return on Equity
  const netMargin = parseFloat(stockData["ProfitMargin"]); // Net Profit Margin
  const dte = parseFloat(stockData["DividendYield"]); // Dividend Yield
  const debtToEquity = parseFloat(stockData["DebtEquityRatio"]); // Debt-to-Equity ratio
  const currentRatio = parseFloat(stockData["CurrentRatio"]); // Current ratio
  const pbr = parseFloat(stockData["PriceToBookRatio"]); // Price-to-Book ratio

  // Display the calculated metrics
  console.log(`Price-to-Sales ratio: ${currentPrice.toFixed(2)}`);
  console.log(`Earnings Per Share: ${eps.toFixed(2)}`);
  console.log(`Return on Equity: ${roe.toFixed(2)}%`);
  console.log(`Net Profit Margin: ${netMargin.toFixed(2)}%`);
  console.log(`Dividend Yield: ${dte.toFixed(2)}%`);
  console.log(`Debt-to-Equity ratio: ${debtToEquity.toFixed(2)}`);
  console.log(`Current ratio: ${currentRatio.toFixed(2)}`);
  console.log(`Price-to-Book ratio: ${pbr.toFixed(2)}`);
}

// Call the calculateMetrics function to retrieve and display the metrics
calculateMetrics();

const dotenv = require('dotenv');
const axios = require('axios');

const API_KEY = dotenv.alpha_advantage_key;
const SYMBOL = 'AAPL'; // replace with the desired stock ticker

// Function to retrieve the required metrics from AlphaVantage API
async function getStockMetrics() {

  try {

    // Required Metrics for Revenue Growth Rate Calculation
    // 
    const balanceSheetData = await axios.get(`https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${SYMBOL}&apikey=${API_KEY}`);
    const totalLiabilities = balanceSheetData.data.annualReports[0].totalLiabilities;
    const totalStockholdersEquity = balanceSheetData.data.annualReports[0].totalStockholdersEquity;
    const debtToEquityRatio = totalLiabilities / totalStockholdersEquity;

    

    // Log the metrics for testing purposes
    console.log('Revenue:', revenue);
    console.log('Net Income:', netIncome);
    console.log('Total Assets:', totalAssets);
  } catch {

    console.log("Failed")

  }
}

getStockMetrics()
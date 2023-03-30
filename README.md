# Tikerwatch - 8 Pillar Stock Analysis Tool

## Contributors
John Capovani (johncapovani)

# Deployed using Render
- Front End: https://tikerwatch-eightpillars.onrender.com/
- Back End: https://tikerwatch.onrender.com/ 
## Overview
With TikerWatch, users can not only search for any ticker and get the 8 pillar metrics for fundamental analysis, but they can also add tickers to their watchlist for easy tracking. This allows users to stay on top of their investments and quickly see any changes in the stock's performance.

In addition to this, TikerWatch also provides relevant news for the stocks that users follow, keeping them up-to-date with any developments that may impact their investments. This ensures that users have all the necessary information to make informed investment decisions.

By combining the power of fundamental analysis with the ability to track and stay informed on relevant news, TikerWatch is the ultimate tool for any value investor looking to make profitable investments in the stock market.

## Technologies
1. Mongo/mongoose
2. Express (and async handler)
3. React
4. Node.js
5. JSON Webtoken Validation for User Authentication

## Features
- View 8 pillar metrics and grades for each stock
- Add stocks to a watchlist
- Responsive design for desktop and mobile devices
- Built with React, Node.js, Express, MongoDB, and Redux
- Uses Alpha Vantage API for stock data and news sources for financial news
- Simple and intuitive user interface for easy navigation and analysis

# Installation
To run the app locally, follow these steps:

Clone the repository: git clone https://github.com/johncapovani/8-pillar-stock-analysis

Navigate to the project directory: cd 8-pillar-stock-analysis-app
Install the dependencies: npm install
Start the server: npm start
Open the app in your browser at http://localhost:3000
Usage
To use the app, follow these steps:

On the eight pillar analysis screen enter a stock symbol in the search bar and click "Search".
View the metrics, grades, and charts for each of the 8 pillars of stock analysis.
Analyze the data to make informed investment decisions.

Users can add tickers to the watchlist screen as well. Simply enter the stocks name, symbol, and  industry and submit.

However, there is a lot of room for scalability:
### Stretch Goals
- View relevant news for followed stocks
- Options Trade Suggestions
- Notify users when stocks are trending to alert investors to potential winners

# 8 Pillars
- Stock Market Cap to Sales or Price-to-Sales ratio: This metric measures a company's market capitalization relative to its revenue. A low ratio is generally considered favorable, indicating that a company's stock price is low relative to its revenue and may be undervalued. A high ratio may indicate that the stock is overvalued.
- Earnings Per Share (EPS): This metric represents the amount of profit a company generates per share of its outstanding stock. A higher EPS is generally considered better, as it indicates that the company is more profitable on a per-share basis.
- Return on Equity (ROE): This metric measures how effectively a company is using its shareholders' equity to generate profits. A higher ROE is generally considered better, as it indicates that the company is generating more profits with each dollar of shareholder equity.
- Net Profit Margin: This metric measures the percentage of revenue that a company retains as profit after accounting for all expenses. A higher net profit margin is generally considered better, as it indicates that the company can generate more profits from its revenue.
- Dividend Yield: This metric measures the percentage of a company's stock price that is paid out as dividends each year. A higher dividend yield is generally considered better, as it indicates that investors can expect a higher return on their investment.
- Debt-to-Equity ratio: This metric compares a company's total debt to its shareholder equity, indicating how much debt the company is using to finance its operations. A lower ratio is generally considered better, as it indicates that the company is relying less on debt to fund its operations.
- Current ratio: This metric measures a company's ability to pay off its short-term liabilities with its short-term assets. A higher current ratio is generally considered better, as it indicates that the company has more assets available to pay off its debts in the short term.
- Price-to-Book ratio: This metric compares a company's market capitalization to its book value, which represents the value of its assets minus its liabilities. A lower ratio is generally considered better, as it indicates that the company's stock price is lower relative to its book value and may be undervalued. The 8 pillar stock analysis is a method of evaluating the overall health and potential of a publicly traded company by assessing eight different factors or "pillars" of its business. 

# The eight pillars are:
1.	Price-to-Sales ratio
2.	Earnings Per Share
3.	Return on Equity
4.	Net Profit Margin
5.	Dividend Yield
6.	Debt-to-Equity ratio
7.	Current ratio
8.	Price-to-Book ratio

# Grading Scale:
Price-to-Sales ratio:
Bad: Above 5
Good: Below 5
Excellent: Below 1
Earnings Per Share:
Bad: Negative
Good: Positive
Excellent: Positive and growing
Return on Equity:
Bad: Below 10%
Good: Between 10% and 20%
Excellent: Above 20%
Net Profit Margin:
Bad: Below 10%
Good: Between 10% and 20%
Excellent: Above 20%
Dividend Yield:
Bad: Below 1%
Good: Between 1% and 3%
Excellent: Above 3%
Debt-to-Equity ratio:
Bad: Above 2
Good: Between 1 and 2
Excellent: Below 1
Current ratio:
Bad: Below 1
Good: Above 1
Excellent: Above 2
Price-to-Book ratio:
Bad: Above 4
Good: Between 1 and 4
Excellent: Below 1
The 8-pillar stock analysis calculation involves gathering and analyzing financial data for each of these pillars to assess the overall strength and potential of a company. The analysis can be done manually or using financial software tools, and it is often used by investors and traders to make investment decisions based on a company's financial health and potential.


## What we learned

## Citations and Resources
- Used Traversy Media Controller, Routes, Redux Slice structure for the backend https://github.com/bradtraversy/mern-tutorial
- Referenced code from personal projects and reused it to prevent having to recreate it all again. Such as styling, header, login page, register page, and other react components
- Referenced Traversy Media for JWTToken, Protected Routes, etc.
- Traversy Media https://www.youtube.com/watch?v=-0exw-9YJBo&t=821s
- Investopedia. "8 Pillars of Financial Success". https://www.investopedia.com/terms/e/eight-pillars-financial-prosperity.asp
- Morningstar. (n.d.). Analyst Research. https://www.morningstar.com/investing/analyst-research
- Koyfin. (n.d.). Koyfin | Advanced graphing and analytical tools for investors. https://www.koyfin.com/
- Yahoo Finance. (n.d.). Yahoo Finance - Stock Market Live, Quotes, Business & Finance News. https://finance.yahoo.com/
- Seeking Alpha. (n.d.). Stock Market Insights | Seeking Alpha. https://seekingalpha.com/
- The Balance. (n.d.). How to Analyze a Stock. https://www.thebalance.com/how-to-analyze-stocks-357224
- Alpha Vantage. "API Documentation". https://www.alphavantage.co/documentation/
- Chart.js. "Documentation". https://www.chartjs.org/docs/latest/
- MongoDB. "Documentation". https://docs.mongodb.com/
- Node.js. "Documentation". https://nodejs.org/en/docs/
- React. "Documentation". https://reactjs.org/docs/getting-started.html
- Redux. "Documentation". https://redux.js.org/
- JWT. "JSON Web Tokens". https://jwt.io/
- Bcrypt. "Documentation". https://www.npmjs.com/package/bcrypt
- Axios. "Documentation". https://axios-http.com/docs/intro
- Build a COMPLETE Fullstack Responsive MERN App with Auth, Likes, Dark Mode | React, MongoDB, MUI 
https://www.youtube.com/watch?v=K8YELRmUb5o&t=313s
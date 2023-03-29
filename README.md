# Tikerwatch - 8 Pillar Stock Analysis Tool

## Contributors
John Capovani (johncapovani)

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
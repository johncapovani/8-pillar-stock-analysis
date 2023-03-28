import React from 'react';
import '../components_css/PillarDescriptions.css'

const PillarDescriptions = () => {
  return (
    <div className="pillar-descriptions">
      <h1>Pillar Metric  Descriptions</h1>
      <h3 className="pillar-heading">EPS - Earnings Per Share</h3>
      <p className="pillar-description">EPS measures the amount of profit that can be attributed to each outstanding share of a company's stock. A high EPS is generally desirable, as it indicates that a company is profitable and generating more income per share.</p>

      <h3 className="pillar-heading">ROE - Return on Equity</h3>
      <p className="pillar-description">ROE measures a company's profitability by calculating how much profit it generates with the money shareholders have invested. A high ROE is generally desirable, as it indicates that a company is using shareholders' money effectively.</p>

      <h3 className="pillar-heading">Net Profit Margin</h3>
      <p className="pillar-description">Net profit margin measures how much of a company's revenue is left after all expenses have been paid. A high net profit margin is generally desirable, as it indicates that a company is operating efficiently and generating a healthy profit.</p>

      <h3 className="pillar-heading">Dividend Yield</h3>
      <p className="pillar-description">Dividend yield is the amount of dividends paid by a company per share, expressed as a percentage of the share price. A high dividend yield is generally desirable, as it indicates that a company is returning value to its shareholders.</p>

      <h3 className="pillar-heading">Debt to Equity Ratio</h3>
      <p className="pillar-description">Debt to equity ratio measures how much debt a company has compared to its equity (shareholder investment). A low debt to equity ratio is generally desirable, as it indicates that a company is not overly reliant on debt to finance its operations.</p>

      <h3 className="pillar-heading">Current Ratio</h3>
      <p className="pillar-description">Current ratio measures a company's ability to pay its debts in the short term. A high current ratio is generally desirable, as it indicates that a company has enough current assets to cover its current liabilities.</p>

      <h3 className="pillar-heading">Price to Book Ratio</h3>
      <p className="pillar-description">Price to book ratio compares a company's market value (share price) to its book value (assets minus liabilities). A low price to book ratio is generally desirable, as it indicates that a company's stock is undervalued compared to its book value.</p>

      <div className="reference-section">
        <h2 className="reference-heading">References:</h2>
        <ul className="reference-list">
          <li className="reference-item"><a href="https://www.investopedia.com/terms/e/eps.asp" target="_blank" rel="noopener noreferrer">Investopedia. (n.d.). Earnings Per Share (EPS).</a></li>
          <li className="reference-item"><a href="https://www.investopedia.com/terms/r/returnonequity.asp" target="_blank" rel="noopener noreferrer">Investopedia. (n.d.). Return On Equity - ROE.</a></li>
          <li className="reference-item"><a href="https://www.investopedia.com/terms/n/netprofitmargin.asp" target="_blank" rel="noopener noreferrer">Investopedia. (n.d.). Net Profit Margin.</a></li>
          <li className="reference-item"><a href="https://www.investopedia.com/terms/d/dividendyield.asp" target="_blank" rel="noopener noreferrer">Investopedia. (n.d.). Dividend Yield.</a></li>
          <li className="reference-item"><a href="https://www.investopedia.com/terms/d/debtequityratio.asp" target="_blank" rel="noopener noreferrer">Investopedia. (n.d.). Debt-To-Equity Ratio - D/E Ratio.</a></li>
          <li className="reference-item"><a href="https://www.investopedia.com/terms/c/currentratio.asp" target="_blank" rel="noopener noreferrer">Investopedia. (n.d.). Current Ratio.</a></li>
          <li className="reference-item"><a href="https://www.investopedia.com/terms/p/price-to-bookratio.asp" target="_blank" rel="noopener noreferrer">Investopedia. (n.d.). Price-To-Book Ratio - P/B Ratio.</a></li>
        </ul>
      </div>


    </div>
  );
};

export default PillarDescriptions;

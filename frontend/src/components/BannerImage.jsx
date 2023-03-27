import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import '../components_css/BannerImage.css';

function BannerImage() {
  const { user } = useSelector((state) => state.auth)

  return (
    <div className="banner-image">
      <img src="https://wallpapers.com/images/hd/stock-market-pixel-world-map-68jnf6uxk9s2ded7.jpg" alt="Banner" />
      <div className="banner-content">
        <h1>Where data drives decisions</h1>
        <p>Get a comprehensive analysis of a company's financial health using the industry-standard 8 pillar approach, all at your fingertips.</p>
        {user ? (
          <Link to="/eightpillars">
            <button>Start analyzing now!</button>
          </Link>
        ) : (
          <Link to="/login">
            <button>Login to start your analysis</button>
          </Link>
        )}
      </div>
    </div>
  );
}

export default BannerImage;
import React from 'react';
import '../components_css/BannerImage.css'


function BannerImage() {
  return (
    <div className="banner-image">
      <img src="https://wallpapers.com/images/hd/stock-market-pixel-world-map-68jnf6uxk9s2ded7.jpg" alt="Banner" />
      <div className="banner-content">
        <h1>Where data drives decisions</h1>
        <p>Get a comprehensive analysis of a company's financial health using the industry-standard 8 pillar approach, all at your fingertips.</p>
        <button>Get Started</button>
      </div>
    </div>
  );
}

export default BannerImage;

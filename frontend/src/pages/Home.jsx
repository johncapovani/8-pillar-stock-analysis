import React from 'react';
import BannerImage from '../components/BannerImage';
import FeatureCard from '../components/FeatureCard';
import '../pages_css/Home.css'

function Home() {
  return (
    <div>
      <BannerImage />
      <div className="feature-cards-container">
        <FeatureCard
          title="Company Health Analysis"
          description="Easily analyze the fundamental health of a company and make informed investment decisions using the industry-standard 8 pillar approach, with our comprehensive stock analysis tool."
          icon="https://cdn-icons-png.flaticon.com/512/2082/2082126.png"
        />
        <FeatureCard
          title="Watch List"
          description="Track the prices and fundamental health of your favorite stocks with ease. Stay up-to-date with notifications when there are changes in prices or fundamental indicators."
          icon="https://cdn-icons-png.flaticon.com/512/809/809497.png"
        />
        <FeatureCard
          title="Financial News"
          description="Stay up to date with the latest financial news and analysis that is relevant to your watchlist, and make informed investment decisions."
          icon="https://cdn-icons-png.flaticon.com/512/3352/3352475.png"
        />
      </div>
    </div>
  );
}

export default Home;

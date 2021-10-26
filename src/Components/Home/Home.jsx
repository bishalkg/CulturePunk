import './Home.css';
import React, {
  useState, useEffect,
} from 'react';
import { withRouter, Link } from 'react-router-dom';

import UnstyledButtonCustom from './SignUpButton';
import CoinCanvas from './CoinCanvas';
import LandingCard from './LandingCard';
import NFTVideo from './NFTVideo';
import Player from '../Livestream/Player/Player';
import ExpandableCarousel from './ExpandableCarousel';

const Home = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [offset]);

  return (
    <div
      className="home-section home-container"
    >
      <div
        id="parallax-sec-1"
        className="home-section home-sec-1"
        style={{
          transform: `translateX(${offset * 0.8}px)`,
        }}
      >
        <CoinCanvas />
        <h2 className="culture-punk-heading">
          .CULTURE PUNK.
          <br />
          <p className="landing-sub-heading">A new kind of art access for a new world of virtual community.</p>
        </h2>
        <p className="byline-statement">
          {/* By honoring our collective lived experiences
          in a virtual world, we re-imagine an art space that operates to serve and see everyone. */}
          For artists. By artists.
          {' '}
          <br />
          {' '}
        </p>
        <p style={{ fontFamily: 'PM-semi-bold', fontSize: '2vw', color: 'white' }}>
          {/* <em>For artists.</em>
          {' '}
          <br />
          {' '}
          <em>By Artists.</em> */}
        </p>
        <Link to="/signup" style={{ position: 'absolute', bottom: '0vh', left: '0vw' }}><UnstyledButtonCustom /></Link>
      </div>
      <div
        className="home-section home-sec-2"
      >
        <h2
          className="home-section-header"
        >
          Live Events
        </h2>
        <div className="section-2-content">
          <LandingCard src="src/Components/Home/img/venusaur/scene.gltf" />
          <Player />
        </div>
      </div>
      <div
        className="home-section home-sec-3"
      >
        <h2
          className="home-carousel-banner"
          style={{ fontFamily: 'PM-semi-bold', fontSize: '3vw', color: 'white', marginTop: 0 }}
        >
          Upcoming Events

        </h2>
        <ExpandableCarousel slideSelect={3} />
        <h2 className="home-carousel-banner" style={{ fontFamily: 'PM-semi-bold', fontSize: '3vw', color: 'white' }}>Trending</h2>
        <ExpandableCarousel slideSelect={5} />
      </div>
      <div
        className="home-section home-sec-4"
      >
        <h2 className="nft-video-header">Learn More About NFTs</h2>
        <NFTVideo />
      </div>
    </div>
  );
};

export default withRouter(Home);

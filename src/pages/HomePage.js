import React from 'react';
import Adoption from '../components/HomePageComponents/Adoption/Adoption';
import Faq from '../components/HomePageComponents/FAQ/Faq';
import FullyTransparent from '../components/HomePageComponents/FullyTransparent/FullyTransparent';
import Showcase from '../components/HomePageComponents/Showcase/Showcase';
import TheFutureOfMoney from '../components/HomePageComponents/TheFutureOfMoney/TheFutureOfMoney';
import VideoExplanation from '../components/HomePageComponents/VideoExplanation/VideoExplanation';

function HomePage() {
  return (
    <main>
      <Showcase />
      <VideoExplanation />
      <TheFutureOfMoney />
      <FullyTransparent />
      <Adoption />
      {/* <Faq /> */}
    </main>
  );
}

export default HomePage;

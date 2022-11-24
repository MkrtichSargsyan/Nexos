import React from 'react';
import FullyTransparent from '../components/HomePageComponents/FullyTransparent/FullyTransparent';
import Showcase from '../components/HomePageComponents/Showcase/Showcase';
import TheFutureOfMoney from '../components/HomePageComponents/TheFutureOfMoney/TheFutureOfMoney';

function HomePage() {
  return (
    <main>
      <Showcase />
      <TheFutureOfMoney />
      <FullyTransparent/>
    </main>
  );
}

export default HomePage;

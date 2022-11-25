import React from 'react';
import BlockchainReady from '../components/HowItWorksComponents/BlockchainReady/BlockchainReady';
import HowItWorksShowcase from '../components/HowItWorksComponents/HowItWorksShowcase/HowItWorksShowcase';
import NewTokens from '../components/HowItWorksComponents/NewTokens/NewTokens';
import StabilityGrowth from '../components/HowItWorksComponents/StabilityGrowth/StabilityGrowth';
import AboutToken from '../components/WhyNexosPageComponents/AboutToken/AboutToken';
import LatestNews from '../components/WhyNexosPageComponents/LatestNews/LatestNews';

function HowItWorks() {
  return (
    <main>
      <HowItWorksShowcase />
      <StabilityGrowth />
      <BlockchainReady />
      <NewTokens />
      <AboutToken />
      <LatestNews/>
    </main>
  );
}

export default HowItWorks;

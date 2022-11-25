import React from 'react';
import BlockchainReady from '../components/HowItWorksComponents/BlockchainReady/BlockchainReady';
import HowItWorksShowcase from '../components/HowItWorksComponents/HowItWorksShowcase/HowItWorksShowcase';
import StabilityGrowth from '../components/HowItWorksComponents/StabilityGrowth/StabilityGrowth';

function HowItWorks() {
  return (
    <main>
      <HowItWorksShowcase />
      <StabilityGrowth />
      <BlockchainReady />
    </main>
  );
}

export default HowItWorks;

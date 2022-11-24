import React from 'react';
import AboutNexos from '../components/WhyNexosPageComponents/AboutNexos/AboutNexos';
import AboutToken from '../components/WhyNexosPageComponents/AboutToken/AboutToken';
import LatestNews from '../components/WhyNexosPageComponents/LatestNews/LatestNews';
import WhyUseNexos from '../components/WhyNexosPageComponents/WhyUseNexos/WhyUseNexos';

function WhyNexosPage() {
  return (
    <main>
      <WhyUseNexos />
      <AboutNexos />
      <AboutToken />
      <LatestNews />
    </main>
  );
}

export default WhyNexosPage;

import React from 'react';
import s from './StabilityGrowth.module.scss';

import im7 from '../../../assets/images/im7.svg';

function StabilityGrowth() {
  return (
    <section className={s.stabilityGrowthSection}>
      <img src={im7} alt="bg" className={s.bgImage} />
      <div className={s.stabilityGrowthDescription}>
        <h2>More stability, more growth</h2>
        <p>
          Nexos tokens have grown in popularity over the past few years, with a
          market cap of over US$77 billion (as of December 2021). Nexos tokens
          allow customers the ability to transact across different blockchains,
          without the inherent volatility and complexity typically associated
          with digital tokens.
        </p>
      </div>
    </section>
  );
}

export default StabilityGrowth;

import React from 'react';
import s from './HowItWorksShowcase.module.scss';

import im5 from '../../../assets/images/im5.svg';

function HowItWorksShowcase() {
  return (
    <section className={s.howItWorksShowcaseSection}>
      <img src={im5} alt="bg" className={s.bgImage} />
      <h1>What are Nexos tokens and how do they work?</h1>
      <div className={s.nexosTokenAsset}>
        <h4>
          Nexos tokens are assets that move across the blockchain just as
          easily as other digital currencies but that are pegged to real-world
          currencies on a <span className={s.basis}>1-to-1 basis</span>
        </h4>
        <p>
          Nexos tokens are referred to as stablecoins because they offer price
          stability as they are pegged to a fiat currency. This offers traders,
          merchants and funds a low volatility solution when exiting positions
          in the market. <br /> All Nexos tokens are pegged at 1-to-1 with a
          matching fiat currency (e.g., 1 USD₮ = 1 USD) and are backed 100% by
          Nexos’s reserves. <br /> As a fully{' '}
          <span className={s.transparent}>transparent</span> company, we publish
          a record of the current reserve assets.
        </p>
      </div>
    </section>
  );
}

export default HowItWorksShowcase;

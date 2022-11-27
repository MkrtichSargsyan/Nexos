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
          Nexos tokens are assets that move across the blockchain as easily as
          other digital currencies, but are over-collateralized by fiat and cash
          equivalents at a ratio of <span className={s.basis}>500%.</span>
        </h4>
        <p>
          Nexos tokens are assets that move across the blockchain as easily as
          other digital currencies, but are over-collateralized by fiat and cash
          equivalents at a ratio of 500%. *Nexos tokens are referred to as
          stablecoins because they offer price stability since they are pegged
          to a fiat currency. This provides traders, merchants, and funds with a
          low-volatility solution when giving up their positions in the market.
          All Nexos tokens are pegged to an equivalent fiat currency at a ratio
          of 500% (e.g. 1 $NUSD = 5 USD) and are backed 500% by Nexos reserves.
          As a fully transparent company, we publish a record of current
          reserves.
        </p>
      </div>
    </section>
  );
}

export default HowItWorksShowcase;

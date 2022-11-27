import React from 'react';
import s from './AboutToken.module.scss';

import im6 from '../../../assets/images/im6.svg';

function AboutToken() {
  return (
    <section className={s.aboutTokenSection}>
    <img src={im6} alt="im" className={s.bgImage}/>
      <h2>The token that is disrupting the global financial industry</h2>
      <div className={s.articlesContainer}>
        <article>
          <h3>NUSD for Individuals</h3>
          <p>
          Nexos tokens will offer exceptional liquidity on top-tier exchanges,
            enabling traders to take advantage of arbitrage opportunities in the
            shortest possible time.
          </p>
          {/* <button>Learn more {'->'}</button> */}
        </article>
        <article>
          <h3>NUSD for Merchants</h3>
          <p>
          For merchants, the integration of $NUSD tokens opens up a range of
            opportunities for consumers to purchase products and services.
          </p>
          {/* <button>Learn more {'->'}</button> */}
        </article>
        <article>
          <h3>NUSD for Exchanges</h3>
          <p>
          Nexos tokens play a central role in the digital token ecosystem and
            will be the most actively traded in terms of 24-hour volume.
          </p>
          {/* <button>Learn more {'->'}</button> */}
        </article>
      </div>
    </section>
  );
}

export default AboutToken;

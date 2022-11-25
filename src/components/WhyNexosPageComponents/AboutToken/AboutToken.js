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
          <h3>Nexos for Individuals</h3>
          <p>
            Nexos tokens offer exceptional liquidity on tier one exchanges
            giving traders the ability to take advantage of arbitrage
            opportunities in the fastest time possible.
          </p>
          <button>Learn more {'->'}</button>
        </article>
        <article>
          <h3>Nexos for Merchants</h3>
          <p>
            For merchants, integrating Nexos tokens opens up an array of
            opportunities for consumers to purchase products and services.
          </p>
          <button>Learn more {'->'}</button>
        </article>
        <article>
          <h3>Nexos for Exchanges</h3>
          <p>
            Nexos tokens play a pivotal role in the digital token ecosystem and
            are the most actively traded in terms of 24-hour volume.
          </p>
          <button>Learn more {'->'}</button>
        </article>
      </div>
    </section>
  );
}

export default AboutToken;

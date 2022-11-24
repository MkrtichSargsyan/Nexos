import React from 'react';
import s from './TheFutureOfMoney.module.scss';

import im1 from '../../../assets/images/im1.svg';

function TheFutureOfMoney() {
  return (
    <section className={s.theFutureOfMoneySection}>
      <div className={s.imageContainer}>
        <img src={im1} alt="im1" />
      </div>
      <div className={s.description}>
        <h2>Driving the Future of Money</h2>
        <p>
          Tether tokens are the most widely adopted stablecoins, having
          pioneered the concept in the digital token space. A disruptor to the
          conventional financial system and a trailblazer in the digital use of
          traditional currencies, Tether Tokens support and empower growing
          ventures and innovation throughout the blockchain space. Tether Tokens
          exist as a digital token built on multiple blockchains.
        </p>
        <buttton className={s.button}>Learn How Nexos Works</buttton>
      </div>
    </section>
  );
}

export default TheFutureOfMoney;

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
        <h2>A new revolution of Stablecoins</h2>
        <p>
          Disruptive to the conventional financial system and pioneering the
          digital use of traditional currencies, Nexos tokens support and
          empower growing businesses and innovation across the blockchain space.
          Nexos tokens exist as digital tokens based on multiple blockchains.
        </p>
        {/* <button className={s.button}>Learn How Nexos Works</button> */}
      </div>
    </section>
  );
}

export default TheFutureOfMoney;

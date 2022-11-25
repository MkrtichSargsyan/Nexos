import React from 'react';
import s from './FullyTransparent.module.scss';
import im2 from '../../../assets/images/im2.svg';

function FullyTransparent() {
  return (
    <section className={s.fullyTransparent}>
      <div className={s.description}>
        <h2>100% backed and fully transparent</h2>
        <p>
          All Nexos tokens (USD₮) are pegged at 1-to-1 with a matching fiat
          currency and are backed 100% by Nexos’s reserves. We publish a daily
          record of the current total assets and reserves.
        </p>
        <button>Go to Transparency Page</button>
      </div>
      <div className={s.imageContainer}>
        <img src={im2} alt="im2" />
      </div>
    </section>
  );
}

export default FullyTransparent;

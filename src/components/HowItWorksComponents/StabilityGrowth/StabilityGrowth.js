import React from 'react';
import s from './StabilityGrowth.module.scss';

import im7 from '../../../assets/images/im7.svg';

function StabilityGrowth() {
  return (
    <section className={s.stabilityGrowthSection}>
      <img src={im7} alt="bg" className={s.bgImage} />
      <div className={s.stabilityGrowthDescription}>
        <h2>Balance sheet stability through growth</h2>
        <p>
          Nexos tokens will become increasingly popular in the coming years.
          Nexos tokens allow customers to trade across different blockchains
          without the inherent volatility and complexity normally associated
          with digital tokens. By over-collateralizing all $NUSD, Nexos token
          users are always on the safe side.
        </p>
      </div>
    </section>
  );
}

export default StabilityGrowth;

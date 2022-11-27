import React from 'react';
import s from './FullyTransparent.module.scss';
import im9 from '../../../assets/images/im9.svg';

function FullyTransparent() {
  return (
    <section className={s.fullyTransparent}>
      <div className={s.description}>
        <h2>500% over-collateralised and fully transparent</h2>
        <p>
          All Nexos tokens ($NUSD) are 500% backed by Nexos reserves. We publish
          a daily report on the current total assets and reserves.
        </p>
        {/* <button>Go to Transparency Page</button> */}
      </div>
      <div className={s.imageContainer}>
        <img src={im9} alt="im2" />
      </div>
    </section>
  );
}

export default FullyTransparent;

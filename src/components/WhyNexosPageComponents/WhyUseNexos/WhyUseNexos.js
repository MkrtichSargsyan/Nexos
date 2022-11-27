import React from 'react';
import s from './WhyUseNexos.module.scss';

import im4 from '../../../assets/images/im4.svg';
import im5 from '../../../assets/images/im5.svg';

import logo from '../../../assets/logo.png';

function WhyUseNexos() {
  return (
    <section className={s.whyUseNexosSection}>
      <img src={im5} alt="im" className={s.bgImage} />
      <div className={s.whyUseNexosDescription}>
        <h1>Why use Nexos</h1>
        <p>
          Launched in 2022, Nexos tokens ($NUSD) pioneered the stablecoin model
          and will become the most traded stablecoins in the world. Nexos tokens
          offer the stability and simplicity of fiat currencies coupled with the
          innovative nature of blockchain technology, making them a perfect
          combination of both worlds.
        </p>
      </div>
      <div className={s.imageContainer}>
        <img src={logo} alt="im4" />
      </div>
    </section>
  );
}

export default WhyUseNexos;

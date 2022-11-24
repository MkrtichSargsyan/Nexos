import React from 'react';
import s from './WhyUseNexos.module.scss';

import im4 from '../../../assets/images/im4.svg'
import im5 from '../../../assets/images/im5.svg'


function WhyUseNexos() {
  return (
    <section className={s.whyUseNexosSection}>
      <img src={im5} alt="im" className={s.bgImage}/>
      <div className={s.whyUseNexosDescription}>
        <h1>Why use Nexos</h1>
        <p>
          Launched in 2014, Tether tokens (USD₮) pioneered the stablecoin model
          and are the most widely traded. Tether tokens offer the stability and
          simplicity of fiat currencies coupled with the innovative nature of
          blockchain technology, representing a perfect combination of both
          worlds.
        </p>
      </div>
      <div className={s.imageContainer}>
        <img src={im4} alt="im4" />
      </div>
    </section>
  );
}

export default WhyUseNexos;

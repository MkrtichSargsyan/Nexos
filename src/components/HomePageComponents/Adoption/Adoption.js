import React from 'react';
import s from './Adoption.module.scss';
import Slider from 'infinite-react-carousel';

import im1 from '../../../assets/images/sliderImages/bigone__3_.svg';
import im2 from '../../../assets/images/sliderImages/Bitfinex.svg';
import im3 from '../../../assets/images/sliderImages/BTCEX__1_.svg';
import im4 from '../../../assets/images/sliderImages/BTSE__1_.svg';
import im5 from '../../../assets/images/sliderImages/Cobo.svg';
import im6 from '../../../assets/images/sliderImages/Coinbase.svg';
import im7 from '../../../assets/images/sliderImages/gate.io.svg';
import im8 from '../../../assets/images/sliderImages/hitbtc.svg';
import im9 from '../../../assets/images/sliderImages/huobi_global.svg';
import im10 from '../../../assets/images/sliderImages/kraken.svg';

function Adoption() {
  return (
    <section className={s.adoptionSection}>
      <h3 className={s.title}>Widespread adoption</h3>
      <p>
        From being the first, to the most used, stablecoin, and one of the most
        traded tokens by volume, Nexos tokens have come a long way. Nexos
        tokens are today the most widely adopted stablecoins across major
        exchanges, OTC desks, and wallets, including:
      </p>

      <section className={s.sliderSection}>
        <Slider
          autoplay
          slidesToShow={window.screen.width < 768 ? 1: 4}
          centerMode
          pauseOnHover={false}
          arrows={false}
          duration={1000}
          autoplaySpeed={1500}
        >
          <div className={s.sliderItem}>
            <img src={im1} alt="im" />
          </div>
          <div className={s.sliderItem}>
            <img src={im2} alt="im" />
          </div>
          <div className={s.sliderItem}>
            <img src={im3} alt="im" />
          </div>
          <div className={s.sliderItem}>
            <img src={im4} alt="im" />
          </div>
          <div className={s.sliderItem}>
            <img src={im5} alt="im" />
          </div>
          <div className={s.sliderItem}>
            <img src={im6} alt="im" />
          </div>
          <div className={s.sliderItem}>
            <img src={im7} alt="im" />
          </div>
          <div className={s.sliderItem}>
            <img src={im8} alt="im" />
          </div>
          <div className={s.sliderItem}>
            <img src={im9} alt="im" />
          </div>
          <div className={s.sliderItem}>
            <img src={im10} alt="im" />
          </div>
        </Slider>
      </section>

      <h3 className={s.title}>
        The token that is disrupting the global financial industry
      </h3>

      <div className={s.articles}>
        <article>
          <div>
            <h3>Nexos for Individuals</h3>
        
          </div>
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

export default Adoption;

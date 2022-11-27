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
      <h3 className={s.title}>A new way to build trust</h3>
      <p>
        From the first to the most used stablecoin and one of the most traded
        tokens by volume, this is the path Nexos wants to take with $NUSD.
        Because the entire crypto market today is based on stablecoins, where it
        is not certain whether and how much collateral they have deposited,
        Nexos will usher in a new era.
      </p>

      {/* <section className={s.sliderSection}>
        <Slider
          autoplay
          slidesToShow={window.screen.width < 768 ? 1 : 4}
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
      </section> */}

      <h3 className={s.title}>
        The token that will turn the global financial industry on its head
      </h3>

      <div className={s.articles}>
        <article>
          <div>
            <h3>NUSD for Individuals</h3>
          </div>
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

export default Adoption;

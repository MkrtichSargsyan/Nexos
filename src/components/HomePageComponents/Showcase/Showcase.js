import React, { useState, useEffect } from 'react';
import Typist from 'react-typist';
import s from './Showcase.module.scss';

import im9 from '../../../assets/images/im9.svg';

function Showcase() {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);

  return (
    <section className={s.showcaseSection}>
      <div className={s.showcaseText}>
        <h1>Nexos token</h1>
        <div className={s.typistContainer}>
          {count ? (
            <Typist
              ms={500}
              avgTypingDelay={50}
              onTypingDone={() => setCount(0)}
            >
              <span className={s.typistItem}>Exponention Growth</span>
              <Typist.Backspace count={25} delay={800} />
              <span className={s.typistItem}>A new revolution of Stablecoins</span>
              <Typist.Backspace count={25} delay={800} />
            </Typist>
          ) : (
            ''
          )}
        </div>
        {/* <div className={s.showcaseButtons}>
          <button className={s.createAccountBtn}>Create Account</button>
          <button className={s.learnHowWorksBtn}>Learn How Nexos Works</button>
        </div> */}
      </div>
      <div className={s.showcaseImg}>
        <img src={im9} alt="sh" />
      </div>
    </section>
  );
}

export default Showcase;

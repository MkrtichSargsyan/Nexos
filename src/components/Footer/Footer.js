import React from 'react';
import s from './Footer.module.scss';

import im3 from '../../assets/images/im3.svg';
import logo from '../../assets/logo.png';

function Footer() {
  return (
    <footer>
      <section className={s.footerTop}>
        <img src={im3} alt="im3" className={s.footerImg} />
        <div className={s.footerDescription}>
          <h2>Nexos token</h2>
          <p>
            Nexos supports and empowers growing ventures and innovation as a
            digital token built on multiple blockchains.
          </p>
        </div>
        <div className={s.footerArticles}>
          <ul>
            <li>Nexos</li>
            <li>Why Nexos?</li>
            <li>How it Works</li>
            <li>Knowledge Base</li>
            <li>Transparency</li>
            <li>Fees</li>
          </ul>

          <ul>
            <li>Nexos</li>
            <li>Why Nexos?</li>
            <li>How it Works</li>
            <li>Knowledge Base</li>
            <li>Transparency</li>
            <li>Fees</li>
          </ul>

          <ul>
            <li>Nexos</li>
            <li>Why Nexos?</li>
            <li>How it Works</li>
            <li>Knowledge Base</li>
            <li>Transparency</li>
            <li>Fees</li>
          </ul>

          <ul>
            <li>Nexos</li>
            <li>Why Nexos?</li>
            <li>How it Works</li>
            <li>Knowledge Base</li>
            <li>Transparency</li>
            <li>Fees</li>
          </ul>

          <ul>
            <li>Nexos</li>
            <li>Why Nexos?</li>
            <li>How it Works</li>
            <li>Knowledge Base</li>
            <li>Transparency</li>
            <li>Fees</li>
          </ul>
        </div>
      </section>
      <section className={s.footerBottom}>
        <div className={s.logoContainer}>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h6>
            Copyright © 2013-2022 Tether Operations Limited. All rights
            reserved.
          </h6>

        </div>
      </section>
    </footer>
  );
}

export default Footer;

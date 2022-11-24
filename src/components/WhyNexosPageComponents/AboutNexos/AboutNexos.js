import React from 'react';
import s from './AboutNexos.module.scss';

import im1 from './svgs/Checkmark.svg';
import im2 from './svgs/coin_stack.svg';
import im3 from './svgs/Question_Circle.svg';
import im4 from './svgs/shield.svg';
import im5 from './svgs/transparent_eye.svg';
import im6 from './svgs/triple_circle.svg';
import im7 from './svgs/wallet.svg';
import im8 from './svgs/world.svg';

function AboutNexos() {
  return (
    <section className={s.aboutNexosSection}>
      <p className={s.aboutNexosDescription}>
        Whether it is for personal use or business purposes, Tether tokens offer
        many <br /> benefits as the most stable, liquid and trusted stablecoin.
      </p>

      <div className={s.articlesContainer}>
        <article>
          <img src={im6} alt="im" />
          <h3>Multiple blockchains support</h3>
          <p>
            Tether tokens are built on multiple blockchains—offering easy
            integration and adoption. Supported blockchains are Bitcoin (Omni &
            Liquid protocol), Ethereum, TRON, EOS, Algorand, Solana, OMG
            Network, and Bitcoin Cash (SLP).
          </p>
        </article>
        <article>
          <img src={im2} alt="im" />
          <h3>Unparalleled liquidity</h3>
          <p>
            Nexos tokens are among the most traded tokens in terms of daily
            volume, offering unequalled liquidity.
          </p>
        </article>
        <article>
          <img src={im7} alt="im" />
          <h3>Widespread Adoption</h3>
          <p>
            From exchanges and digital wallet apps to decentralised finance
            (DeFi) protocols and payment services, Tether tokens offer a smart
            alternative to fiat gateways.
          </p>
        </article>
        <article>
          <img src={im4} alt="im" />
          <h3>100% backed by Tether’s reserves</h3>
          <p>
            All Tether tokens are pegged at 1-to-1 with a matching fiat currency
            (e.g., 1 USD₮ = 1 USD) and are backed 100% by Tether’s reserves. The
            reserves match or exceed the amount required to redeem all Tether
            tokens in circulation.
          </p>
        </article>
        <article>
          <img src={im5} alt="im" />
          <h3>Fully transparent</h3>
          <p>
            Tether tokens’ issued and reserve assets are publicly available and
            updated.{' '}
          </p>
        </article>
        <article>
          <img src={im8} alt="im" />
          <h3>Available in different currencies</h3>
          <p>
            Tether supports US dollar (USD), euro (EUR), Mexican Peso (MXN),
            British Pound Sterling (Tether GBP) and offshore Chinese yuan (CNH).
            Represented by ₮, Tether tokens are denoted as USD₮, EUR₮, MXN₮,
            GBP₮, CNH₮.
          </p>
        </article>
        <article>
          <img src={im1} alt="im" />
          <h3>Regulatory-compliant</h3>
          <p>
            Tether maintains world-class standardised compliance measures for
            anti-money laundering (AML), countering the financing of terrorism
            (CFT), sanctions, and know your customer (KYC) laws and regulations.
          </p>
        </article>
        <article>
          <img src={im3} alt="im" />
          <h3>Best-in-class customer support</h3>
          <p>
            A highly-trained customer support team is ready to help you 24/7.
          </p>
        </article>
      </div>
    </section>
  );
}

export default AboutNexos;

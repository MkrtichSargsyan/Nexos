import React, { useState, useEffect, useMemo } from 'react';
import s from './Faq.scss';
import FaqItem from './FaqItem/FaqItem';

import faqImage from '../../../assets/images/faqImg.svg';

function Faq() {
  const [selected, setSelected] = useState(null);

  const faqs = useMemo(
    () => [
      {
        title: 'What is Tether?',
        content: `
              <p>Launched in 2014, Tether is a blockchain-enabled platform designed to facilitate the use of fiat currencies in a digital manner. Tether works to disrupt the conventional financial system via a more modern approach to money. Tether has made headway by giving customers the ability to transact with traditional currencies across the blockchain, without the inherent volatility and complexity typically associated with a digital currency. As the first blockchain-enabled platform to facilitate the digital use of traditional currencies (a familiar, stable accounting unit), Tether has democratised cross-border transactions across the blockchain.</p>
             
            `,
      },
      {
        title: 'How do Tether tokens work?',
        content: `
          <p>Tether tokens exist as digital tokens built on several leading blockchains, including Algorand, Avalanche, Bitcoin Cash’s Simple Ledger Protocol (SLP), Ethereum, EOS, Liquid Network, Omni, Polygon, Tezos, Tron, Solana and Statemine. These transport protocols consist of open source software that interface with blockchains to allow for the issuance and redemption of Tether tokens. </p><br />
          <p>Every Tether token is 100% backed by our reserves, which includes traditional currency and cash equivalents, and may include other assets and receivables from loans made by Tether to third parties.</p><br />
          <p>The Tether platform is fully reserved when the sum of all Tether tokens in circulation is less than or equal to the value of our reserves. Through our </p><br />
          <p>Tether was originally created to use the Bitcoin network as its transport protocol—specifically, the Omni Layer—to allow transactions of tokenised traditional currency. Since this original version of Tether uses the Bitcoin blockchain, it inherits the inherent stability and security of the longest established blockchain network.</p>
       `,
      },
      {
        title: 'What are Tether tokens?',
        content: `
          <p>Tether tokens are assets that move across the blockchain just as easily as other digital currencies but that are pegged to real-world currencies on a 1-to-1 basis.</p><br />
          <p>Tether tokens are referred to as stablecoins because they offer price stability as they are pegged to a fiat currency. This offers traders, merchants and funds a low volatility solution when exiting positions in the market.</p><br />
       `,
      },
      {
        title: 'What currencies and commodities does Tether support?',
        content: `
          <p>Tether supports US dollars (USD), euros, Mexican peso, British Pound Sterling, offshore Chinese yuan, and Gold, with the following Tether tokens, respectively: USD₮, EUR₮, MXN₮, </p><br />
       `,
      },
      {
        title: 'Who can use Tether tokens?',
        content: `
          <p>Tether tokens enable businesses – including exchanges, wallets, payment processors, financial services and ATMs – to easily use fiat currencies on blockchains. Some of the largest businesses in the digital currency ecosystem have integrated Tether tokens.</p><br />
       `,
      },
    ],
    []
  );

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className="faqContainer">
      <img src={faqImage} alt="faqImage" className="faqImage" />

      <h3>FAQs</h3>
      <div className="accordion">
        {faqs.map((item, i) => (
          <FaqItem
            key={i}
            title={item.title}
            content={item.content}
            icon={selected === i ? '-' : '+'}
            isVisible={selected === i ? 'show' : ''}
            toggle={() => toggle(i)}
          />
        ))}
      </div>
    </section>
  );
}

export default Faq;

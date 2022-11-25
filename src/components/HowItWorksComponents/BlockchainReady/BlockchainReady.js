import React from 'react';
import s from './BlockchainReady.module.scss';

import im8 from '../../../assets/images/im8.svg';

function BlockchainReady() {
  return (
    <section className={s.blockchainReadySection}>
      <div className={s.blockchainreadyContainer}>
        <h2>Blockchain ready</h2>
        <p>
          Nexos tokens exist as digital tokens built on various blockchains
          including Algorand, Ethereum, EOS, Liquid Network, Omni, Tron, Bitcoin
          Cash’s Standard Ledger Protocol, and Solana. Therefore, issuance of
          Nexos tokens is viable on various blockchains with varying
          capabilities depending on the transport protocol used.
        </p>
      </div>
      <div>
        <img src={im8} alt="im8" className={s.bgImage} />
      </div>
    </section>
  );
}

export default BlockchainReady;

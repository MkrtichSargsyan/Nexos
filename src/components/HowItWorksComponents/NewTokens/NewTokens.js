import React from 'react';
import s from './NewTokens.module.scss';

function NewTokens() {
  return (
    <section className={s.newTokensSection}>
      <h2>New Tokens</h2>
      <p>
        Nexos only issues new Nexos tokens when they are requested and
        purchased by customers who have followed our strict KYC procedure.
      </p>
    </section>
  );
}

export default NewTokens;

import React from 'react';
import s from './LatestNews.module.scss';

import artBg from '../../../assets/images/articleBg.png';

function LatestNews() {
  return (
    <section className={s.latestNewsSection}>
      <h2>Latest news</h2>
      <div className={s.articlesContainer}>
        <article>
          <div className={s.imageContainer}>
            <img src={artBg} alt="bg" />
          </div>
          <div className={s.articleContent}>
            <h3>Why USD₮ Issuances Ensures No Risks from FTX_Alameda</h3>
            <p>
              The failure of FTX/Alameda is likely to be a watershed moment in
              the history of the cryptocurrency industry. In addition to being
              one of the largest financial failures, it has set off a daisy
              chain of leveraged failures cascading through the industry. While
              there is still more to the story, and likely more counterparties
              who will emerge in the coming weeks, Tether wants to address one
              topic which has come to the surface following the failure of FTX.
            </p>
            <button>Read more {'->'}</button>
          </div>
        </article>
        <article>
          <div className={s.imageContainer}>
            <img src={artBg} alt="bg" />
          </div>
          <div className={s.articleContent}>
            <h3>Tether Confirms Zero Exposure To Genesis</h3>
            <p>
              With recent news surrounding Genesis today, Tether would like to
              confirm that it has absolutely no exposure to Genesis or Gemeni
              Earn. Tether tokens are 100% backed by its reserves, and the
              assets that are backing the reserves exceed the liabilities.
              Tether holds a strong, conservative, and liquid portfolio, which
              includes cash, cash equivalents, and U.S. treasuries. Tether will
              continue to focus on safeguarding those reserves.
            </p>
            <button>Read more {'->'}</button>
          </div>
        </article>
      </div>
      <div className={s.allnewsBtnContainer}>
        <button className={s.allNewsBtn}>Read all news</button>
      </div>
    </section>
  );
}

export default LatestNews;

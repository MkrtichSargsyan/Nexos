import React from 'react';
import './FaqItem.scss';

function FaqItem({ title, content, toggle, icon, isVisible }) {
  return (
    <div className="faqItem">
      <div className="faqTitleContainer" onClick={() => toggle()}>
        <h2 className="faqTitle">{title}</h2>
        <div className="faqToggleBtn">{icon}</div>
      </div>

      <div className={`content ${isVisible}`}>
        <br />
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <br />
      </div>
    </div>
  );
}

export default FaqItem;
import React from 'react';
import style from './Highlights.module.css';

const HighlightsSection = () => {
  return (
    <div className={style.container}>
      <h3 className={style.breakdown}>Breakdown</h3>
      <h3 className={style.heading}>Key Highlights</h3>
      <ul className={style.listing}>
        <li>
          Exclusive connectivity offer catering to eligible individuals across
          all 50 states.
        </li>
        <li>
          Clear separation between device sales and insurance product marketing.
        </li>
        <li>
          Lucrative commission-based opportunities for Device Sales
          Representatives.
        </li>
        <li>
          Marketing strategies tailored for optimal engagement in diverse
          locations
        </li>
        <li>
          Over 10,000 generated Medicare consumer leads in just six months.
        </li>
      </ul>
      <h5 className={style.subHeading}>Join Now! Explore the program</h5>
    </div>
  );
};

export default HighlightsSection;

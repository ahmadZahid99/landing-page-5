import React from 'react';
import style from './Card.module.css';
import {cardList} from '../../constant/Card';

const CardSection = () => {
  return (
    <div className={style.container}>
      {cardList.map((data) => (
        <div key={data.id} className={style.card}>
          <div className={style.cardBody}>
            <img src={data.image} alt={data.heading} />
            <h3 className={style.cardHeading}>{data.heading}</h3>
            <p className={style.desc}>{data.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSection;


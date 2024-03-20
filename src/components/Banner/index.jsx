import React from 'react';

import style from './Banner.module.css';

const Banner = () => {
  return (
    <div className={style.backgroundImage}>
      <main className={style.container}>
        <nav className={style.navSection}>
          <h1 className={style.logo}>Brainwave.io</h1>
          <div className={style.menuSection}>
            <div className={style.contactUs}>
              <p>Have any question?</p>
              <p>(800) 388-8342</p>
            </div>
            <button className={style.btn}>Join Now</button>
            <img src="/images/banner/menuIcon.svg" alt="Menu Icon" />
          </div>
        </nav>
        <div className={style.bannerSection}>
          <h2>
            Unleash Opportunities <br /> in the Medicare Space
          </h2>
          <p>
            This exciting program enables agents and
            <br /> agencies to connect with a multitude of Medicare eligible
            prospects, eager to <br /> share their insurance information through
            a streamlined process.
          </p>
          <button className={style.startedBtn}>
            <img src="/images/banner/playIcon.svg" alt="Play Icon" />
            GET STARTED
          </button>
        </div>
      </main>
    </div>
  );
};

export default Banner;

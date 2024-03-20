import React from 'react';
import style from './Footer.module.css';
const FooterSection = () => {
  return (
    <div className={style.bgImage}>
      <div className={style.container}>
        <div className={style.logoSection}>
          <h2 className={style.logo}>Brainwave.io</h2>
          <p className={style.logoDesc}>
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
        </div>
        <div className={`${style.contactUs} ${style.mobile}`}>
          <h5 className={style.contactUsHeading}>Our Contact</h5>
          <p className={style.contactUsTitle}>
            Email: <span className={style.contactUsSpan}>abcd@gmail.com</span>
          </p>
          <p className={style.contactUsTitle}>
            Phone:{' '}
            <span className={style.contactUsSpan}>
              212-962-0125 or 212-699-8217
            </span>
          </p>
        </div>
        <div className={style.news}>
          <h5 className={style.newsHeading}>Recent News</h5>
          <p className={style.newsDesc}>do, tortor mauris ut fekee massa</p>
          <p className={style.newsDate}>18 March, 2020</p>
          <p className={style.newsDesc}>do, tortor mauris ut fekee massa</p>
          <p className={style.newsDate}>18 March, 2020</p>
        </div>
        <div className={style.news}>
          <h5 className={style.newsHeading}>Twitter Feed</h5>
          <p className={style.newsDesc}>Mex Frame Work</p>
          <p className={style.newsDate}>18 March, 2020</p>
          <p className={style.newsDesc}>do, tortor mauris ut fekee massa</p>
          <p className={style.newsDate}>18 March, 2020</p>
        </div>
        <div className={`${style.contactUs} ${style.desktop}`}>
          <h5 className={style.contactUsHeading}>Our Contact</h5>
          <p className={style.contactUsTitle}>
            Email: <span className={style.contactUsSpan}>abcd@gmail.com</span>
          </p>
          <p className={style.contactUsTitle}>
            Phone:{' '}
            <span className={style.contactUsSpan}>
              212-962-0125 or 212-699-8217
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterSection;

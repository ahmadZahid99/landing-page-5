import React from 'react';
import style from './Form.module.css';

const FormSection = () => {
  return (
    <div className={style.bgImage}>
      <div className={style.container}>
        <div className={style.formSection}>
          <div className={style.formBody}>
            <h5 className={style.heading}>
              Join the league of successful agents leveraging this program
            </h5>
            <form className={style.form}>
              <input
                type="text"
                className={style.input}
                placeholder="First Name"
              />
              <input
                type="text"
                className={style.input}
                placeholder="Last Name"
              />
              <input type="email" className={style.input} placeholder="Email" />
              <button className={style.fromBtn} type="submit">
                JOIN NOW
              </button>
            </form>
          </div>
        </div>
        <div>
          <img src="/images/form/formCheck.svg" alt="form check" width="100%"/>
        </div>
      </div>
    </div>
  );
};

export default FormSection;

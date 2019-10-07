import React from 'react';
import PropTypes from 'prop-types';
import Styles from './style.module.css';

const Controls = ({ handelPlus, handelMinus }) => {
  return (
    <section className={Styles.controls}>
      <button onClick={handelMinus} type="button" className={Styles.button}>
        Назад
      </button>
      <button onClick={handelPlus} type="button" className={Styles.button}>
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  handelPlus: PropTypes.func.isRequired,
  handelMinus: PropTypes.func.isRequired,
};

export default Controls;

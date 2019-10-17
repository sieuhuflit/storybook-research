import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Button.scss';

import { TYPE } from './Button.constants';

const Button = ({ children, type, onClick }) => {
  const inputRef = React.createRef();

  const getTypes = () => {
    switch (type) {
      case TYPE.WARNING: {
        return styles.btnWarning;
      }

      case TYPE.DANGER: {
        return styles.btnDanger;
      }

      default:
        return null;
    }
  };

  const handleButtonClick = () => {
    onClick(inputRef.current.value);
  };

  return (
    <div className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Type something..."
        ref={inputRef}
      />

      <button
        type="button"
        onClick={handleButtonClick}
        className={cx(styles.btn, getTypes(type))}
      >
        {children}
      </button>
    </div>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]).isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;

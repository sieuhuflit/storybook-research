import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Button.scss';

import { TYPE, SIZE } from './Button.constants';

const Button = ({ children, type, size, onClick }) => {
  const inputRef = React.createRef();

  const getType = () => {
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

  const getSize = () => {
    switch (size) {
      case SIZE.SMALL: {
        return styles.btnSmall;
      }

      case SIZE.LARGE: {
        return styles.btnLarge;
      }

      default:
        return null;
    }
  };

  const handleButtonClick = () => {
    onClick(inputRef.current.value);
  };

  const btnClassname = cx(
    styles.btn,
    getType(),
    getSize(),
  );

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
        className={btnClassname}
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
  type: PropTypes.string,
  size: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

Button.defaultProps = {
  type: TYPE.NORMAL,
  size: SIZE.MEDIUM,
};

export default Button;

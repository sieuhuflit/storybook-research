import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import styles from './Button.scss';

import { TYPE } from './Button.constants';

const Button = ({ children, type, onClick }) => {
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
  }


  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(styles.btn, getTypes(type))}
    >
      {children}
    </button>
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

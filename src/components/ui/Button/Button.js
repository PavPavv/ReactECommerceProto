import React from 'react';

import styles from './Button.module.scss';

const Button = ({ children, isPrimary, ...otherProps }) => {
  return (
    <button
      className={isPrimary ? styles.ButtonPr : styles.Button}
      {...otherProps}
    >
      {children}
    </button>
  )
}

export default Button;

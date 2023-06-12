import React from 'react';

import styles from './Button.module.css';

interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
 
}

export const Button: React.FC<ButtonProps> = ({ color, children, style, onClick }) => {
  const className = `${styles.button} ${styles[`button_${color}`]}`;

  return (
    <button className={className} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

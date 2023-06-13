import React, { ComponentPropsWithRef } from 'react';

export const Button: React.FC<ComponentPropsWithRef<'button'>> = ({
  className,
  children,
  style,
  onClick
}) => (
  <button className={className} style={style} onClick={onClick}>
    {children}
  </button>
);
